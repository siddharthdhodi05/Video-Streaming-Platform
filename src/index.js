import connectToDatabase from "../db/index.js";
import { app } from "./app.js";
  // Use relative path to import db.js


// Connect to MongoDB
connectToDatabase().then(
  () =>{
    app.listen(process.env.PORT || 8000, ()=>{
      console.log(`Server is running at port: ${process.env.PORT}`);
    })
  }
).catch((err)=>{
  console.log('====================================');
  console.log("Mongodb connection fail");
  console.log('====================================');
})




const PORT = process.env.PORT || 5000;


