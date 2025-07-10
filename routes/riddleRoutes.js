import express from 'express';
import { createRiddle_POST, deleteRiddle_DELETE, getAllRiddles_GET, getRiddle_GET, updateRiddle_PUT } from '../controllers/riddleController.js';


const router = express.Router();

router.get("/allriddles",getAllRiddles_GET)
router.get("/riddle/:id",getRiddle_GET)
router.post("/createRiddle",createRiddle_POST)
router.put("/updateRiddle/:id",updateRiddle_PUT)
router.delete("/deleteRiddle/:id",deleteRiddle_DELETE)


export default router;