import express from "express";
import bodyParser from "body-parser";
import dbConnection from "./database.js";

const app = express()

const PORT = 5000;

//dbConnection
dbConnection();

app.listen(PORT, ()=>{
    console.log(`The Server is running on ${PORT}`)
})