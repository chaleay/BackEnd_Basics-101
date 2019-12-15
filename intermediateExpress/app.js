var express = require("express");
var app = express();

//tells express which default directory to use for stuff
app.use(express.static("public"));
app.set('view engine', 'ejs');
//instead of linking to style sheet directly, link to header instead in each html page

app.get("/", function(req, res){
    
    res.render("dogs.ejs");
    //res.send("Welcome to the home page");
});

app.get("/posts", function(req, res){
    var posts = [
    {title: "Post 1", author: "Elias"},
    {title: "Post 2", author: "Faggheti"},
    {title: "Post 3", author: "Jew"},
    ];

    res.render("posts.ejs", {posts: posts});

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