// const express=require('express');
const env=require('dotenv')
env.config();
const PORT=process.env.PORT;
const app=require('./src/app');
const bodyParser=require('body-parser')
// const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})