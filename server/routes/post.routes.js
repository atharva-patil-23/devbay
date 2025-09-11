import express from "express"
import authmiddleware from "../middleware/auth.middleware.js"

const postRouter = express.Router()


postRouter.post("/",authmiddleware,(req,res)=>{
    const userId = req.userId

    const {title , content , createdBy} = req.body
})