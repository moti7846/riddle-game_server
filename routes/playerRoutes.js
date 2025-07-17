import express from 'express';
import { createplayer, deleteplayer, getAllplayers, getplayer, updateplayer } from '../controllers/playerController.js';


const router = express.Router();

router.get("/allrplayers",getAllplayers)
router.get("/player/:id",getplayer)
router.post("/createplayer",createplayer)
router.put("/updateplayer/:id",updateplayer)
router.delete("/deleteplayer/:id",deleteplayer)


export default router;