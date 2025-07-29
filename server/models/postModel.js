import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    title:{
        type:String,
        required:true,
        minlength:4
    },
    content:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
},{timestamps:true})


const Post = mongoose.model('Post',postSchema)

export default Post;