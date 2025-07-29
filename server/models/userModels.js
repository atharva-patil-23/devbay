import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    bio:{
        type:String,
    },
    profilePicture:{
        type:String,
        trim:true
    }

},{timestamps:true})


const User = mongoose.model('User',userSchema)

export default User;
