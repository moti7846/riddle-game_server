import { readAll, readByName, create, updateTime } from "../DAL/CRUD_supabase.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export async function getAllPlayers(req, res) {
  const players = await readAll();
  if (!players || players.length === 0) {
    return res.status(404).json({ msg: "No players found." });
  }
  res.status(200).json(players);
}

export async function getProfile(req, res) {
  jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "Invalid token." });
    }
    res.status(200).json({ player: decoded });
  });
}

export async function getPlayer(req, res) {
  const { username, password } = req.body;
  const player = await readByName(username);

  if (!player || !(await bcrypt.compare(password, player.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign(
    { username: player.username, role: player.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
  res.json({ token }).status(200);
}

export async function createPlayer(req, res) {
  const { username, password } = req.body;
  if (!(await readByName(username))?.error) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);
  await create({ username, password: hashed });

  res.sendStatus(201);
}

export async function updatePlayerTime(req, res) {
  const result = await updateTime(req.body.name, req.body.time);
  if (!result.err) {
    return res.status(200).json({ msg: "Player time updated." });
  }
  res.status(500).json({ msg: "Error updating player time.", result });
}