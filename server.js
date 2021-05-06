const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect("mongodb://inyuusha:mypass@mongo/?authSource=admin")
.then(()=>console.log("Server connected to database"))
.catch((err)=>console.log(e))

//routes
app.get('/',(req,res)=>{
    res.send("<h2>Hello World111</h2>")
})

const port = process.env.PORT||3000;

app.listen(port,()=>console.log(`Server is running on port ${port}`))