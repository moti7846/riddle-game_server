import { ObjectId } from "mongodb";
import { connect } from "../DBConfig/riddles.js";


export async function create(riddle) {
  const db = await connect();
  const id = await db.collection("riddles").insertOne(riddle)
  return id
}

export async function readAll() {
  const db = await connect();
  const data = await db.collection("riddles").find().toArray()
  return data
}

export async function readById(id) {
  const db = await connect();
  const data = await db.collection("riddles").findOne({ "_id": new ObjectId(id) })
  return data
}

export async function update(id,riddle) {
  const db = await connect();
  const data = await db.collection("riddles").updateOne({ "_id": new ObjectId(id) } , { $set: riddle })
  return data
}

export async function deleted(id){
    const db = await connect();
    const data = await db.collection("riddles").deleteOne({ "_id": new ObjectId(id) })
    return(data);
}