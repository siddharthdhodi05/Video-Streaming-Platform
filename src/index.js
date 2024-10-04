// require('dotenv').config({path: './env'})
/*import connectDB from "../db/index.js";
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})


connectDB()*/

import express from 'express';
import { connectToDatabase } from '../db/index.js';

const app = express();

// Connect to MongoDB
connectToDatabase();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define your port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



















/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/
//NZ9capPVbusgkouR