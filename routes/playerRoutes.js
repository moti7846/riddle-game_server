import express from 'express';
import { createPlayer, getAllPlayers, getPlayer, getProfile, updatePlayerTime } from '../controllers/playerController.js';
import { roleAdmin, roleUser } from '../middlewares/Verification.js';


const router = express.Router();

router.post("/login",getPlayer)
router.post("/signup",createPlayer)

router.post("/profile", getProfile)
router.post("/submit-score",roleUser,updatePlayerTime)

router.get("/allplayers",roleAdmin,getAllPlayers)

export default router;