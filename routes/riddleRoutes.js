import express from 'express';
import { createRiddle, deleteRiddle, getAllRiddles, getRiddle, updateRiddle } from '../controllers/riddleController.js';


const router = express.Router();

router.get("/allriddles",getAllRiddles)
router.get("/riddle/:id",getRiddle)
router.post("/createRiddle",createRiddle)
router.put("/updateRiddle/:id",updateRiddle)
router.delete("/deleteRiddle/:id",deleteRiddle)


export default router;