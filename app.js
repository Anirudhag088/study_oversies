

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();



app.set('view engine', 'ejs');
var _ = require('lodash');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home")
  });

  app.get("/employment",function(req,res){
    res.render("employment");
  });

  app.get("/colleges",function(req,res){
    res.render("colleges")
  });
  

  app.listen(5000, function() {
    console.log("Server started on port 5000");
  });
  