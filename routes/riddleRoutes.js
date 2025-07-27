import express from 'express';
import { createRiddle, deleteRiddle, getAllRiddles, getRiddle, updateRiddle } from '../controllers/riddleController.js';
import { validateId } from '../middlewares/validateId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { roleAdmin } from '../middlewares/Verification.js';


const router = express.Router();

// GET /riddle
router.get("/", getAllRiddles)

// GET /riddle/:id
router.get("/:id", validateId, getRiddle)

// POST /riddle
router.post("/", validateBody, createRiddle)

// PUT /riddle/:id
router.put("/:id", validateId, validateBody, roleAdmin, updateRiddle)

// DELETE /riddle/:id
router.delete("/:id", validateId, roleAdmin, deleteRiddle)


export default router;
