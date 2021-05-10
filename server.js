const express = require('express')
const mongoose = require('mongoose')
const{MONGO_IP,MONGO_PASSWORD,MONGO_PORT,MONGO_USER, REDIS_URL, SESSION_SECRET, REDIS_PORT}=require("./config/config.js")
const session = require("express-session")
const redis = require("redis")
let redisStore = require("connect-redis")(session)
let redisClient = redis.createClient({
    
    host:REDIS_URL,
    port:REDIS_PORT
})
const postRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes")

const app = express()

const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
mongoose.connect(mongoUrl,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>console.log("Server connected to database"))
.catch((err)=>console.log(e))

app.use(session({
    store:new redisStore({client:redisClient}),
    secret:SESSION_SECRET,
    cookie:{
        secure:false,
        resave:false,
        saveUninitialized:true,
        maxAge:30000,
        httpOnly:true
    }
}))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send("<h2>Hello World111</h2>")
})
app.use("/api/v1/post",postRouter);
app.use("/api/v1/user",userRouter);
const port = process.env.PORT||3000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))