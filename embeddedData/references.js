var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

//connect schemas
var Post = require("./models/post");
var User = require("./models/user");

/*
User.create({
    email: "me@txstate.edu",
    name: "Bob Belcher"
});
*/

//creating a post and linking it to our current user
/*
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
*/


//Find user
//find all posts for that user

//without using populate function
User.findOne({email: "me@txstate.edu"}, function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});



//using populate to retreive data for post object ids
User.findOne({email: "me@txstate.edu"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
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
