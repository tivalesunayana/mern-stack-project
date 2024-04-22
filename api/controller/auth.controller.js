import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs';
export const Signup = async(req,res)=>{
    console.log(req.body)

    const {username,email,password} = req.body
    console.log(req.body)
    const hashPassword = bcryptjs.hashSync(password,10);
    const user = new User({username,email,password:hashPassword});

    try{
     const data =    await user.save();
        res.status(200).json({message:"User successfully added" ,data :data})
    }
    catch(err){
        console.log(err)
        res.status(400).json({message:"User error "})

    };

}