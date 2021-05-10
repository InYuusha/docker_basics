const protect=(req,res,next)=>{
    const {user} = req.session;

    if(!user){
        res.status(401).json({
            status:"fail",
            msg:"Unauthorised"
        })
    }
    req.user = user
    next()
}
module.exports=protect;