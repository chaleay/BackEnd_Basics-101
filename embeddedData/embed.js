var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//Post first
var postSchema = new mongoose.Schema({
    title: String,
    content: String

});

var Post = mongoose.model("Post", postSchema);


//user
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var newUser = new User({
    email: "me@txstate.edu",
    name: "Me Me"
    
});

//push in post to post array in user
newUser.posts.push({
    title: "Click here",
    content: "Die Die Die!"

});

//save newuser to db
/*
newUser.save(function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});

var newPost = new Post({
    title: "reflections on Apples",
    content: "Delicious things, the lot of them"
});

newPost.save(function(err, post){
        if(err){
            console.log(err);
        }
        else{
            console.log(post);
        }
});

*/

User.findOne({name: "Me Me"}, function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log("user found...");
        user.posts.push({
            title: "bitch",
            content: "test"

        });
        //need to save this ref to db!
    }
});
