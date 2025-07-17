import { config } from 'dotenv';
import { MongoClient, Db } from 'mongodb';
config();

const client = new MongoClient(process.env.DB_CONNECTION_MONGO);

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */
export async function connect() {
    if (!db) {
        await client.connect();
        db = client.db("project_riddles");
        console.log("Connected to MongoDB");
    }
    return db;
}

connect()