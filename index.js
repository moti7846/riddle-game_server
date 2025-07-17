import express from "express"
import logger from './middlewares/logger.js';
import riddleRoutes from './routes/riddleRoutes.js';
import playerRoutes from './routes/playerRoutes.js';
import {config } from 'dotenv';
config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json())
app.use(logger)

app.use("/riddle" , riddleRoutes)
app.use("/player" , playerRoutes)

app.use((req, res)=>{
  res.status(404).json({msg: "Route not found."});
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});