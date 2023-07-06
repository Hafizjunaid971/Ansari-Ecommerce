import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
//confugure
dotenv.config();
//databse config
connectDB();
//rest project
const app = express()
//middelwares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);




//rest api
app.get('/',(req,res)=>{
    // res.send({
    //     message: 'Welcome to ecommerse appp',
    // });  
    res.send("<h1>Hafiz junaid Ecommerse Project</h1>");  
});

//port
const PORT= process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server is running on ${process.env.DEV_MODE} ${PORT}`.bgCyan.white);
});