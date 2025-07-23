import express from 'express';
import { createPlayer, getAllPlayers, getPlayer, updatePlayerTime } from '../controllers/playerController.js';


const router = express.Router();

router.get("/allplayers",getAllPlayers)
router.post("/login",getPlayer)
// router.get("/play/:username", newPlay)
router.post("/signup",createPlayer)
router.post("/submit-score",updatePlayerTime)


export default router;