import express from 'express';
import { createPlayer, getAllPlayers, getPlayer, updatePlayerTime } from '../controllers/playerController.js';


const router = express.Router();

router.get("/allplayers",getAllPlayers)
router.get("/:username",getPlayer)
router.post("/",createPlayer)
router.post("/submit-score",updatePlayerTime)


export default router;