import { addriddle, deleteRiddle, showRiddle, showRiddles, updateRiddle } from "../data/riddlesService.js";

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
    const { taskDescription, correctAnswer, name } = req.body
    if (!taskDescription || !correctAnswer || !name) {
        return res.status(400).json({ err: "No suitable values ​​were entered." });
    }
    const newRiddle = { id: Date.now(), name: name, taskDescription: taskDescription, correctAnswer: correctAnswer };
    const is_added = await addriddle(newRiddle);
    if (is_added) {
        return res.status(201).json({ msg: "created riddle" });
    }
    return res.status(500).json({ msg: "Error adding riddle." });
}

export async function updateRiddle(req, res) {
    const { taskDescription, correctAnswer, name } = req.body
    if (!taskDescription || !correctAnswer || !name) {
        return res.status(400).json({ err: "No suitable values ​​were entered." });
    }
    const upRiddle = { id: req.params.id, name: name, taskDescription: taskDescription, correctAnswer: correctAnswer };
    const is_update = await updateRiddle(upRiddle);
    if (is_update) {
        return res.status(200).json({ msg: "update riddle" });
    }
    res.status(500).json({ msg: "Error update riddle." });
}

export async function deleteRiddle(req, res) {
    const is_delete = await deleteRiddle(req.params.id);
    if (is_delete) {
        return res.status(200).json({ msg: "Riddle deleted successfully." });
    }
    res.status(404).json({ msg: "Riddle not found." });
}