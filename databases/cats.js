var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//compile schema into model
var Cat = mongoose.model("Cat", catSchema);


//adding a new cat to the DB
var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Bitchy"

});

/*
var cat1 = new Cat({
    name: "Norris",
    age: 11,
    temperament: "Cunt"

});
*/

//saves our created cat to the db 
/*
george.save(function(err, cat){
    if(err)
        console.log("Something went wrong");
    else{
        console.log(george.name + " added to the db of cats");
    }
});
*/

//can also use cat.create as well
Cat.create({
    name: "Snow White",
    age: 12,
    temperament: "nice"
},
    //include callback
    function(err, cat){
        if(err){
            console.log("Something went wrong");
            console.log(err);
        }
        else{
            console.log(cat.name + " added to the db of cats");
        }
    }
)

//RETRIEVE DATA
Cat.find({}, function(err, cats){
    if(err){
        console.log("Something went wrong");
    }
    else{
        console.log("retrieved the following cats:\n");
        console.log(cats);
    }

});




