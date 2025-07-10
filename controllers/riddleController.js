import { addriddle, showRiddle, showRiddles } from "../data/riddlesService.js";

export async function getAllRiddles(req, res) {
    const riddles = await showRiddles();
    if (!riddles || riddles.length === 0) {
        return res.status(404).json({ msg: "No riddles found." });
    }
    res.status(200).json(riddles);
}
export async function getRiddle(req, res) {
    const riddles = await showRiddle(req.params.id);
    if (!riddles) {
        return res.status(404).json({ msg: " riddle Not found." });
    }
    res.status(200).json(riddles);
}

export async function createRiddle(req, res) {
    try {
        const newRiddle = { id: Date.now(), name: req.body.name , taskDescription : req.body.taskDescription , correctAnswer : req.body.correctAnswer};
        console.log("test");
        await addriddle(newRiddle);
        return res.status(201);
    } catch (error) {
        console.log(`error from createRiddle: ${error}`);
        res.status(500).json({ msg: "Error adding riddle." });       
    }
}
export async function updateRiddle(req, res) {
    
}
export async function deleteRiddle(req, res) {
    
}