 var mongoose = require("mongoose");
 var Campground = require("./models/campgrounds");
 var Comment = require("./models/comments");
 var User = require("./models/user");

 var data = [
     {
         name: "Redd",
         image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
     {
         name: "Aaron",
         image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     },
     {
         name: "Huber",
         image: "https://images.unsplash.com/photo-1485343034225-9e5b5cb88c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     }
 ]

//  function seedDB(){
//      //remove all camps
//     Campground.remove({}, (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("camps removed...");
//         Comment.remove({}, (err) => {
//             if(err){
//                 console.log(err);
//             }
//             console.log("comments removed...")
//         })
//         //add some camps
//         data.forEach((camp) => {
//             Campground.create(camp, (err, campground) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(`added camp ${campground.name}`);
//                     //add some comments
//                     Comment.create(
//                         {
//                             author: "Chris",
//                             text: "Lorem ipsum dolor sit amet, consectetur."
//                         }, (err, comment) => {
//                             if(err){
//                                 console.log(err);
//                             } else {
//                                 campground.comments.push(comment);
//                                 campground.save();
//                                 console.log(`added comment to ${campground.name}`)
//                             }
//                         });
//                 }
//             });
//         });
//     });
//  }

async function seedDB(){
    await Campground.remove({});
    console.log("camps remover");
    await Comment.remove({});
    console.log("comments removed");
    await User.remove({});
    console.log("users removed");

    for(const seed of data){
        let campground = await Campground.create(seed);
        console.log("camp created");
        let comment = await Comment.create(
            {
                author: "Chris",
                text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet"
            }
        )
        console.log("comment created");
        campground.comments.push(comment);
        campground.save();
        console.log('comment added');
    }
}
 
 module.exports = seedDB;