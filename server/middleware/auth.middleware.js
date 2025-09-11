import jwt from "jsonwebtoken"

function authmiddleware(req,res,next){
    const token = req.headers.token
    const verifyUser = jwt.verify(token, process.env.JWT_USER_SECRET)

    if(verifyUser){
        req.userId = verifyUser.id
        next()
    }else{
        res.status(403).json({
            message:"You are not signed in"
        })
    }
}

export default authmiddleware