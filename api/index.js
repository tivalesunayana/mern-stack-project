import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import authRoutes from './routes/auth.route.js'
dotenv.config();


mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log(' connected to database')
})
.catch((err)=>{
    console.log(err)
})

const app= express();
app.use(express.json());

app.listen(3000,()=>{
    console.log(`listening on port 3000`)
})
// app.use('api/auth' ,authRoutes)
app.use('/api/auth', authRoutes);
app.use((err,req,res,next)=>{
    const statuscode = err.statuscode  || 500 ;
    const message = err.message || 'Internal Server Error';
   return res.status(statuscode).json({
        success :false,
        message,
        statuscode
    });
})
