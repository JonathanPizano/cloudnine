var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {name:"Camp A" ,image:"http://www.photosforclass.com/download/7626464792", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Erat imperdiet sed euismod nisi porta lorem. Quis imperdiet massa tincidunt nunc. Aliquet lectus proin nibh nisl condimentum id venenatis a. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Tortor id aliquet lectus proin nibh nisl condimentum. Odio euismod lacinia at quis risus. Viverra aliquet eget sit amet tellus cras. Etiam sit amet nisl purus in. Pulvinar pellentesque habitant morbi tristique. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Nisl rhoncus mattis rhoncus urna. Nulla facilisi etiam dignissim diam quis enim. Adipiscing at in tellus integer feugiat scelerisque varius. Aliquam id diam maecenas ultricies mi. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Dignissim sodales ut eu sem integer vitae justo eget magna."},
  {name:"Camp B" ,image:"http://www.photosforclass.com/download/246477439", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Erat imperdiet sed euismod nisi porta lorem. Quis imperdiet massa tincidunt nunc. Aliquet lectus proin nibh nisl condimentum id venenatis a. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Tortor id aliquet lectus proin nibh nisl condimentum. Odio euismod lacinia at quis risus. Viverra aliquet eget sit amet tellus cras. Etiam sit amet nisl purus in. Pulvinar pellentesque habitant morbi tristique. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Nisl rhoncus mattis rhoncus urna. Nulla facilisi etiam dignissim diam quis enim. Adipiscing at in tellus integer feugiat scelerisque varius. Aliquam id diam maecenas ultricies mi. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Dignissim sodales ut eu sem integer vitae justo eget magna."},
  {name:"Camp C" ,image:"http://www.photosforclass.com/download/2182093741", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Erat imperdiet sed euismod nisi porta lorem. Quis imperdiet massa tincidunt nunc. Aliquet lectus proin nibh nisl condimentum id venenatis a. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Tortor id aliquet lectus proin nibh nisl condimentum. Odio euismod lacinia at quis risus. Viverra aliquet eget sit amet tellus cras. Etiam sit amet nisl purus in. Pulvinar pellentesque habitant morbi tristique. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Nisl rhoncus mattis rhoncus urna. Nulla facilisi etiam dignissim diam quis enim. Adipiscing at in tellus integer feugiat scelerisque varius. Aliquam id diam maecenas ultricies mi. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Dignissim sodales ut eu sem integer vitae justo eget magna."},
  {name:"Camp D" ,image:"http://www.photosforclass.com/download/14554501150", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Erat imperdiet sed euismod nisi porta lorem. Quis imperdiet massa tincidunt nunc. Aliquet lectus proin nibh nisl condimentum id venenatis a. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Tortor id aliquet lectus proin nibh nisl condimentum. Odio euismod lacinia at quis risus. Viverra aliquet eget sit amet tellus cras. Etiam sit amet nisl purus in. Pulvinar pellentesque habitant morbi tristique. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Nisl rhoncus mattis rhoncus urna. Nulla facilisi etiam dignissim diam quis enim. Adipiscing at in tellus integer feugiat scelerisque varius. Aliquam id diam maecenas ultricies mi. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Dignissim sodales ut eu sem integer vitae justo eget magna."}
  ];

//Remove al campround
function seedDB(){
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("removed Campgrounds");
    // Add a few camprgounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campround){
        if(err){
          console.log(err)
        } else {
          console.log("added a campround");
          //Create a comment
          Comment.create(
          {
            text:"This place is great, but I wish there was internet",
            author:"Homer"
          }, function(err, comment){
            if(err){
              console.log(err);
            } else {
              campround.comments.push(comment);
              campround.save();
              console.log("Created new comment");
            }
          });
        }
      });
    });
  });
}

module.exports = seedDB;
