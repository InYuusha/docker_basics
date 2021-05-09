const express = require('express')
const { getAllPosts, createPost, getOnePost, updatePost, deleteOne } = require("../controllers/postControllers");

const router = express.Router()

router.get("/",getAllPosts);

router.post("/",createPost);

router.get("/:id",getOnePost);

router.patch("/:id",updatePost)

router.delete("/:id",deleteOne)

module.exports=router;