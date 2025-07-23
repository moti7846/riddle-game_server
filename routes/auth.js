import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createPlayer } from "../controllers/playerController.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;

  if (findUser(username)) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);
  createPlayer({ username, password: hashed, role });

  res.sendStatus(201);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = findUser(username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, { httpOnly: true, sameSite: "Strict" });
  res.json({ success: true });
});

export default router;