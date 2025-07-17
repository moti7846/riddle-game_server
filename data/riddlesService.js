import {writeDBFile, readDBFile} from "./DAL/CRUD.js";

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
        data = await readDBFile(path)
        data.push(riddle)
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
        return false
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == riddle.id){
            data[i] = riddle;
            break;
        }
    }
    try {
        await writeDBFile(path, data)
    } catch (error) {
        return false
        console.log(error)
    }    
    return true
}

async function deleteRiddle(id){
    let data;
    let index;
    try {
        data = await readDBFile(path)
    } catch (error) {
        console.log(`Error read riddles: ${error}`)
        return false;
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == id){
            index = i
            break;
        }
    }
    try {
        console.log(data);
        data.splice(index,1);
        console.log(data);
        await writeDBFile(path, data);
    } catch (error) {
        console.log(error)
        return false;
    }    
    return true;
}

export{
    showRiddles,
    showRiddle,
    addriddle,
    updateRiddle,
    deleteRiddle
}