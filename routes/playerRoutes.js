import express from 'express';
import { createPlayer, getAllPlayers, getPlayer, newPlay, updatePlayerTime } from '../controllers/playerController.js';


const router = express.Router();

router.get("/allplayers",getAllPlayers)
router.get("/:username",getPlayer)
router.get("/play/:username", newPlay)
router.post("/",createPlayer)
router.post("/submit-score",updatePlayerTime)


export default router;