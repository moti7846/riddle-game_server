import fs from "fs"


function writeDBFile(path, data) {
    data = JSON.stringify(data)
    return new Promise((resolve, reject) => {
         fs.writeFile(path, data ,(err) => {
            if(err){
                reject(`Error adding riddle: ${err}`)
            }
            resolve("The riddle was added successfully.")
         })
    })
}

function readDBFile(path) {
    return new Promise((resolve, reject) => {
            fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                reject(`Error read riddles: ${err}`)
            }
            try {
                resolve(JSON.parse(data))
            } catch (error) {
                console.log(`from readDBFile: ${error}`);
            }
            })
    })
}

export {
    writeDBFile,
    readDBFile
}