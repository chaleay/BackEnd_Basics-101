var express = require('express');
var app = express();
var request = require('request');

app.set('view engine', 'ejs');


//HOW TO DO A SIMPLE SEARCH WITH EXPRESS + REQUEST FW
app.get('/results', function(req, res){
    var searchTerm = req.query.search;
    //making a request to an omdb api
    request("http://www.omdbapi.com/?s=" + searchTerm + "&apikey=thewdb", function(error, response, body){
            if(!error && response.statusCode == 200){
                var data = JSON.parse(body);
                res.render('results' , {data: data}); //first refers to what var is called on ejs page
                
                
                //res.send(results.Search[0].Title);
            }
    
    });   
});

app.get('/', function(req, res){
    res.render('search');

});


//start server
app.listen(3000, function(){
    console.log('movie app has started on 3000');

});
