import sb from "../DBConfig/players.js";

export async function create(player) {
  const { data, error } = await sb.from("players").insert([{ username: player.username, password: player.password }]).select().single();
  if (error)
    return { error };
  return data
}

export async function readAll() {
  const { data, error } = await sb.from("players").select("*");
  if (error)
    return error;
  return data;
}

export async function readByName(name) {
  const { data, error } = await sb.from("players").select("*").eq("username", name).single();
  if (error)
    return { error };
  return data;
}

export async function updateTime(name, time) {
  const { data, error: err } = await sb.from("players").update({ best_time: time }).eq("username", name).select().single();
  if (err)
    return { err };
  return data;
}

