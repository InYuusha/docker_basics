const Post = require("../models/postModel");


exports.getAllPosts = async(req,res,next)=>{
   try{
    const posts = await Post.find();
    res.status(200).json({
        status:'success',
        results:posts.length,
        data:{
            posts
        }
    })

   }
   catch(e){
       console.log(e)
       res.status(400).json({
           status:"fail",
       })

   }
}


exports.getOnePost = async(req,res,next)=>{
    try{
     const posts = await Post.findOne({_id:req.params.id});
     res.status(200).json({
         status:'success',
         results:posts.length,
         data:{
             posts
         }
     })
 
    }
    catch(e){
        res.status(400).json({
            status:"fail",
        })
 
    }
 }

 exports.createPost = async(req,res,next)=>{
    try{
     const posts = await Post.create(req.body)
     res.status(200).json({
         status:'success',
       
     })
 
    }
    catch(e){
        console.log(e);
        res.status(400).json({
            status:"fail",
            msg:e
        })
 
    }
 }

 exports.updatePost = async(req,res,next)=>{
    try{
     const posts = await Post.updateOne({_id:req.params.id},{title:req.body.title,body:req.body.body})
     res.status(200).json({
         status:'success',
         results:posts.length,
         data:{
             posts
         }
     })
 
    }
    catch(e){
        res.status(400).json({
            status:"fail",
        })
 
    }
 }

 exports.deleteOne = async(req,res,next)=>{
    try{
     const posts = await Post.findOneAndDelete({_id:req.params.id})
     res.status(200).json({
         status:'success',
       
     })
 
    }
    catch(e){
        res.status(400).json({
            status:"fail",
        })
 
    }
 }