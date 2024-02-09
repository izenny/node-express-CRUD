const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./Routes/Userroutes')
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/user',router)

mongoose.connect(process.env.mongo_url).then(()=>{
    console.log('connected to database');
})

app.listen(7000,()=>{
    console.log('connected to port 7000');
})
