import express from "express"
import authmiddleware from "../middleware/auth.middleware.js"
import Post from "../models/postModel.js"

const postRouter = express.Router()


postRouter.post("/blog",authmiddleware,async(req,res)=>{
    const userId = req.userId

    const {title , content , createdBy} = req.body

    const course = await Post.create({
        title,
        content,
        createdBy
    })

    res.json({
        message:"Blog posted successfully!"
    })

})