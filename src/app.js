const express=require('express');
const app=express();
const routes=require('./routes/routes');
const bodyParser = require('body-parser');
const cors=require('cors')
app.use(express.json())
app.use("/bookshop",routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
module.exports=app;