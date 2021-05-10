const express = require('express')
const { getAllPosts, createPost, getOnePost, updatePost, deleteOne } = require("../controllers/postControllers");
const protect = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/",getAllPosts);

router.post("/",protect,createPost);

router.get("/:id",getOnePost);

router.patch("/:id",protect,updatePost)

router.delete("/:id",protect,deleteOne)

module.exports=router;