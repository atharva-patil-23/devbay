import express from "express"
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import User from "../models/userModels.js"

const userRouter = express.Router()

userRouter.post("/signup",async(req,res) => {

    try {
        const {username , email , password} = req.body

        const hashedPassword = bcryptjs.hash(password,12)

        const existingUser = await adminModel.findOne({email})

        if(existingUser){
            res.json({
                message:"User already exists"
            })
        }

        await User.create({
            username:username,
            email:email,
            password:hashedPassword
        })

        res.status(200).json({
            message:"Signup Successful!!"
        })
        
        } catch (error) {
            res.status(403).json({
                message:"error while signing up"
            })
        }

})

userRouter.post("/login",async(req,res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            res.status(409).json({
                message:"invalid Credentials"
            })
        }

        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword){
            res.status(402).json({
                message:"Invalid Credentials"
            })
        }

        const token = jwt.sign({
            id:user._id
        },process.env.JWT_USER_SECRET)

        res.json({
            token:token,
            message:"Sigin IN successful!"
        })


    } catch (error) {
        res.status(403).json({
            message:"error while signing in!"
        })
    }
})