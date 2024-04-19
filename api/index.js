import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
dotenv.config()
const app= express()


mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log(' connected to database')
})
.catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log(`listening on port 3000`)
})