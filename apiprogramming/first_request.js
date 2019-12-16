//simplified way of making requests using request client for node


//basic get request
var request = require('request');
request('http://reddit.com', function(error, response, body ) {
    if(error){
        console.log("Something went wrong\n");
        console.log(error);
    }
    else{
        if(response.statusCode == 200){
            console.log(body);
        }
    }


});


//var parsedData = JSON.parse(body);
//to access data from parsedData...
//parsedData['query']['results']['channel']['astronomy']['sunset'];