//require express for use
var express = require("express");
//save contents of express to app
var app = express();

app.get("/", function(req, res){
    //req is an object that contains info about request that triggered route
    //res contains reponse info
    res.send("Hi there!");
});

app.get("/repeat/:wordToRepeat/:numTimes", function(req, res){
    //req is an object that contains info about request that triggered route
    //res contains reponse info
  
    var numTimes = req.params.numTimes;
    var wordToRepeat = req.params.wordToRepeat;
    var stringToSend = "";

    for(var i = 0; i < numTimes; i++){
        stringToSend += wordToRepeat + " ";
    }

    //make sure to send response
    res.send(stringToSend);
});

app.get("*", function(req, res){
    //req is an object that contains info about request that triggered route
    //res contains reponse info
    res.send("Page not found dingus!");
});


//open server for requests from client 
app.listen(3000, function() { 
    console.log('Server listening on port 3000');
  });