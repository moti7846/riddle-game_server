import {writeDBFile, readDBFile} from "./DAL/functionDAL.js";

const path = "C:\\Users\\97253\\Desktop\\riddle-game_server\\data\\DB\\riddles.txt";

async function showRiddles() {
    try {
        return await readDBFile(path);
    } catch (error) {
        console.log(`from showRiddles: ${error}`);
        return;
    }
}

async function showRiddle(id) {
    try {
        const data = await readDBFile(path);
        return data.find(r => r.id == id)
    } catch (error) {
        console.log(`from showRiddle:${id}: ${error}`);
        return;
    }
}


async function addriddle(riddle){
    let data;
    try {
        console.log("test 2");
        data = await readDBFile(path)
        await data.push(riddle)
    } catch (error) {
        console.log(`from addriddle: ${error}`);
        return false;
    }
    try {
        await writeDBFile(path, data)
        return true;
    } catch (error) {
        console.log(`from addriddle: ${error}`);
        return false;
    }
}

async function updateRiddle(riddle){
    let data;
    try {
        data = await readDBFile(path)
    } catch (error) {
        console.log(`Error read riddles: ${error}`)
        return
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].id === riddle.id){
            data[i] = riddle;
            break;
        }
    }
    try {
        writeDBFile(path, data)
    } catch (error) {
        console.log(error)
    }    
}

async function deleteRiddle(id){
    let data;
    let index;
    try {
        data = await readDBFile(path)
    } catch (error) {
        console.log(`Error read riddles: ${error}`)
        return;
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].id === id){
            index = i
            break;
        }
    }
    try {
        data.splice(index,1);
        writeDBFile(path, data);
    } catch (error) {
        console.log(error)
    }    
}

export{
    showRiddles,
    showRiddle,
    addriddle,
    updateRiddle,
    deleteRiddle
}