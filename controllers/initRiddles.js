import { connect } from "../DBConfig/riddles.js";

const riddles = [
    {
        "name":"Easy Math",
        "taskDescription":"What is 5 + 3? ",
        "correctAnswer":"8"
    },
    {
        "name":"Easy Math",
        "taskDescription":"What is 5 * 4? ",
        "correctAnswer":"20"
    },
    {
        "name":"Easy Math",
        "taskDescription":"What is 8 + 3? ",
        "correctAnswer":"11"
    }
];


export async function initRiddles(req, res) {
    const db = await connect();
    console.log("test");
    await db.collection("riddles").insertMany(riddles);
    res.status(201).json({ msg: "Riddles initialized." });
}