
require("dotenv").config();


const express = require("express");
const cors = require('cors');
const fs = require('fs')
const path = require('path');

const app = express();
// var corsOptions = {
//     //  origin: "http://128.199.20.72/"
//         origin: "http://localhost:5000/"
//   };
  
  app.use(cors({
    // origin: 'http://192.168.1.4:5000'
  }));

app.use(express.json());
const userRouter = require("./api/users/user.router");
const newsRouter = require("./api/news/news.router");



app.use(  express.static(path.join(__dirname, '/public')));

app.use("/api/users", userRouter);
app.use("/api/news", newsRouter);



const port =  5000;

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(port, () =>{
    console.log("Server up and running on PORT: ", port);
}); 