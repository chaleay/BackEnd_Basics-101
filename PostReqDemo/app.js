var express = require("express");
var app = express();
var bodyParser = require("body-parser");


//use the bodyParser
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

//not a scope issue with db
var friends = ["Tony", "MyDick","Katie","Elijah"];

app.get("/", function(req, res){
    res.render("home");
});

//post good for sending data
app.post("/addfriend", function(req, res){
    var newFriend = req.body.friendName;
    friends.push(newFriend);
    //run the code insid e
    res.redirect("/friends");
});

//get for accesing new routes
app.get("/friends", function(req, res){
    res.render("friends", {friends: friends}); //second refers to array, first refers to whats being passed into ejs page
});



app.listen(3000, function(){
    console.log("Server running on port 3000");
});
