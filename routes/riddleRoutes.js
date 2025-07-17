import express from 'express';
import { createRiddle, deleteRiddle, getAllRiddles, getRiddle, updateRiddle } from '../controllers/riddleController.js';


const router = express.Router();

// GET /riddle
router.get("/", getAllRiddles)

// GET /riddle/:id
router.get("/:id", getRiddle)

// POST /riddle
router.post("/", createRiddle)

// PUT /riddle/:id
router.put("/:id", updateRiddle)

// DELETE /riddle/:id
router.delete("/:id", deleteRiddle)


export default router;