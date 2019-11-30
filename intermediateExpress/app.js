var express = require("express");
var app = express();

app.get("/", function(req, res){
    
    res.render("dogs.ejs");
    //res.send("Welcome to the home page");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    var thing2 = "fuck you!"
    res.render("love.ejs", {thingVar: thing, thingVar2: thing2});

    //adding ejs logic and conditionals
    
});

app.listen(3000, function(){
    console.log('Server listening on port 3000'); 
});