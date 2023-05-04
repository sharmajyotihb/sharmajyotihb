require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
var bodyParser = require('body-parser')

const cookieParser = require ("cookie-parser");

const patientRoutes = require("./routes/patient");

const port = process.env.PORT || 8000;

mongoose.connect(process.env.DATABASE,

  {
      useNewUrlParser:true,
      useUnifiedTopology: true,
     useCreateIndex: mongoose.rusted
  }).then(()=>{
      console.log("DB CONNECTED")
  });

  app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", patientRoutes);

app.get("/", (req,res)=>{
  res.send("hello from other side")
})

app.listen(port, ()=>{
  console.log(`app is running at ${port}`);
})