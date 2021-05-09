const User = require("../models/userModel")
const bcrypt = require("bcryptjs")

exports.signUp = async (req,res)=>{

    const {username,password} =req.body;
    await bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,(err,hash)=>{
            if(err) throw err
              
    try{
        const newUser = User.create({
            username:username,
            password:hash
        })
        res.status(201).json({
            status:'success',
            data:{
                user:newUser
            }
        })
    }catch(e){
        console.log(e)
        res.status(400).json({
            status:'fail'
        })

    }
        })
    })

}
exports.login=async(req,res,next)=>{

    const {username,password}=req.body;
    try{
        const user=await User.findOne({username:username})

        if(!user){
            res.status(404).json({
                status:'fail',
                msg:"User not found"
            })
        }
        const isCorrect =await bcrypt.compare(password,user.password);
        if(isCorrect){

            res.status(200).json({
                status:"success"
            })
        }
        else{
            res.status(400).json({
                status:'fail',
                msg:"Incorrect password"
            })
        }
    }
    catch(e){

    }

}