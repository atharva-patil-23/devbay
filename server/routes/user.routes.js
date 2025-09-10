import express from "express"
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import User from "../models/userModels.js"

const router = express.Router()

router.post("/signup",async(req,res) => {

    try {
        const {username , email , password} = req.body

        const hashedPassword = bcryptjs.hash(password,12)

        const existingUser = await adminModel.findOne({email})

    if(existingUser){
        res.json({
            message:"User already exists"
        })
    }

    await adminModel.create({
        username:username,
        email:email,
        password:hashedPassword
    })

    res.json({
        message:"Signup Successful!!"
    })
        
    } catch (error) {
        
    }
    

})