//require express for use
var express = require("express");
//save contents of express to app
var app = express();


//Routing
// "/" => "Hi There"
app.get("/", function(req, res){
    //req is an object that contains info about request that triggered route
    //res contains reponse info
    res.send("Hi there!");
});
// "/bye" => "goodbye"
app.get("/bye", function(req, res){
    //req is an object that contains info about request that triggered route
    //res contains reponse info
    res.send("bye!");
});
// "dog" => "MEOW"
app.get("/dog", function(req, res){
    //req is an object that contains info about request that triggered route
    //res contains reponse info
    res.send("meow!");
});

//routing parameters 
//basic
app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit + " subreddit");
    console.log("Welcome to the " + subreddit + " subreddit");
});

//advanced
app.get("/r/:subredditname/comments/:id/:title/", function(req, res){
    res.send("Welcome to the comment's section");
});

//this has to go at the very bottom
app.get("*", function(req, res){
    //req is an object that contains info about request that triggered route
    //res contains reponse info
    res.send("Page not found dingus!");
});




app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });