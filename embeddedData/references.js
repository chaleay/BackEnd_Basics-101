var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

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
    //in this file, reference id of posts rather than embed posts
    posts: [
        {
        //the id
        type: mongoose.Schema.Types.ObjectId,
        //the type
        ref: "Post"
        }
    ]
});

var User = mongoose.model("User", userSchema);


User.create({
    email: "me@txstate.edu",
    name: "Bob Belcher"
});

//this post will be saved to the posts collection, and the user will have a reference to it
Post.create({
    title: "How to eat food like a proper gentleman pt 1",
    content: "blah blah blah"
}, function(err, post){
    User.findOne({email: "me@txstate.edu"}, function(err, foundUser){
        if(err){
            console.log(err);
        }
        else{
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                console.log(data);
            });
        }
    });
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
