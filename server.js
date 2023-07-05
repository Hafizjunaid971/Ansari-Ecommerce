import express from "express";
import colors from "colors";
import dotenv from "dotenv";


//confugure
dotenv.config();
//rest project
const app = express()


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