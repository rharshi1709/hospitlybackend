import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import router from './Router.js';
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', router)
const port=1000
const url=process.env.MONGO_URL

mongoose.connect(url)
.then(()=>{
    console.log("Connected Successfully to the Database")
    app.listen(port,()=>{
        console.log(`port is started on port no ${port}`)
    })
})
.catch((err)=>{
  console.log(`Failed to connect to database due to ${err.message}`)
})