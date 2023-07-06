const express= require('express');
const bodyParser = require('body-parser');
const abhijeetRoute =require('./Routes/abhijeet');
const sankalpRoute =require('./Routes/sankalp');
const deepanshuRoute =require('./Routes/deepanshu');
require('dotenv').config();

const port= process.env.PORT;

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(abhijeetRoute);
app.use(sankalpRoute);
app.use(deepanshuRoute);

app.listen(port,()=>{
    console.log("Srever is running on port");
});