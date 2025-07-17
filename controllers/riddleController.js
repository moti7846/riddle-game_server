import { create, deleted, readAll, readById, update } from "../DAL/CRUD_mongo.js";

export async function getAllRiddles(req, res) {
    const riddles = await readAll();
    if (!riddles || riddles.length === 0) {
        return res.status(404).json({ msg: "No riddles found." });
    }
    res.status(200).json(riddles);
}

export async function getRiddle(req, res) {
    const riddle = await readById(req.params.id);
    if (!riddle) {
        return res.status(404).json({ msg: "Riddle not found." });
    }
    res.status(200).json(riddle);
}

export async function createRiddle(req, res) {
    const is_added = await create(req.body);
    if (is_added) {
        return res.status(201).json({ msg: "Riddle created successfully." , id: is_added.insertedId });
    }
    res.status(500).json({ msg: "Error creating riddle." });
}

export async function updateRiddle(req, res) {
    const is_update = await update(req.params.id , req.body);
    if (is_update) {
        return res.status(200).json({ msg: "Riddle updated successfully." });
    }
    res.status(404).json({ msg: "Riddle not found." });
}

export async function deleteRiddle(req, res) {
    const is_delete = await deleted(req.params.id);
    if (is_delete.deletedCount !== 0) {
        return res.status(200).json({ msg: "Riddle deleted successfully." });
    }
    res.status(404).json({ msg: "Riddle not found." });
}