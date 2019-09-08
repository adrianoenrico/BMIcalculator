//jshint esversion:6
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));


app.get("/BMIcalculator",function(req,res){
    res.sendFile(__dirname + "/BMIcalculator.html");
});

app.listen(3000,function(){
    console.log("Server started on port 3000"); 
});

app.post("/BMIcalculator", function(req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = weight/Math.pow(height,2);
    res.send("your BMI is " + bmi);
});