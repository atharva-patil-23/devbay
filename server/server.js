import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";

dotenv.config()

await connectDB()



const port = process.env.PORT || 8080;

const app = express();


app.use(express.json());
app.use(cors());


app.use("/user",userRouter)


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "Internal Server Error" });
});


app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});