const mongoose = require("mongoose");
const express = require("express");

const dotenv = require("dotenv");
const DBConnection = require("./DBConnection/DBConnection");

const empRouter = require("./routes/emp-route");


dotenv.config();

const app = express();
DBConnection();
const port = 8000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Server is up and running",    
    });
});

app.use("/employee",empRouter);

app.get("*",(req,res)=>{
    res.status(400).json({
        message:"This route doesnot exist"
    });
});

app.listen(port,()=>{
    console.log(`Server is running at port:${port}`);
});
