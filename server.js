const express = require('express')
require('dotenv').config()
const cors = require("cors");

const app = express()
const PORT = process.env.PORT


app.get('/', (req, res)=>{
    res.send("hello")
})

const db = require("./app/models");
db.sequelize.sync();

app.listen(PORT, ()=>{
    console.log(`app running on ${PORT}`)
})

