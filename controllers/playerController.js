import { readAll, readByName, create, updateTime } from "../DAL/CRUD_supabase.js";

export async function getAllPlayers(req, res) {
  const players = await readAll();
  if (!players || players.length === 0) {
    return res.status(404).json({ msg: "No players found." });
  }
  res.status(200).json(players);
}

export async function getPlayer(req, res) {
  const player = await readByName(req.params.username);
  if (player.error) {
    return res.status(404).json({ msg: "Player not found." });
  }
  res.status(200).json(player);
}

export async function createPlayer(req, res) {
  const result = await create(req.body);
  if (result.id) {
    return res.status(201).json({ msg: "Player created successfully.",player : result});
  }
  res.status(500).json({ msg: "Error creating player.", result});
}

export async function updatePlayerTime(req, res) {
  const result = await updateTime(req.body.name, req.body.time);
  if (!result.err) {
    return res.status(200).json({ msg: "Player time updated."});
  }
  res.status(500).json({ msg: "Error updating player time.",result});
}