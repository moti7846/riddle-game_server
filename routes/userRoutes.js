import express from 'express';
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userController.js';


const router = express.Router();

router.get("/allrUsers",getAllUsers)
router.get("/user/:id",getUser)
router.post("/createUser",createUser)
router.put("/updateUser/:id",updateUser)
router.delete("/deleteUser/:id",deleteUser)


export default router;