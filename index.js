import express from "express"
import logger from './middlewares/logger.js';
import riddleRoutes from './routes/riddleRoutes.js';
import userRoutes from './routes/userRoutes.js';

const PORT = 3000;

const app = express();
app.use(express.json())
app.use(logger)

app.use("/riddle" , riddleRoutes)
app.use("/users" , userRoutes)
app.use((req, res)=>{
        res.status(404).json({msg: "Route not found."});
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});