import express from 'express';
import { createRiddle_POST, deleteRiddle_DELETE, getAllRiddles_GET, getRiddle_GET, updateRiddle_PUT } from '../controllers/riddleController.js';


const router = express.Router();

// GET /riddle
router.get("/", getAllRiddles_GET)

// GET /riddle/:id
router.get("/:id", getRiddle_GET)

// POST /riddle
router.post("/", createRiddle_POST)

// PUT /riddle/:id
router.put("/:id", updateRiddle_PUT)

// DELETE /riddle/:id
router.delete("/:id", deleteRiddle_DELETE)


export default router;