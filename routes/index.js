var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");

//Root route
router.get("/", function(req, res){
  res.render("landing");
});

//Show register form
router.get("/register", function(req, res){
  res.render("register");
});

//Handle sign up logic
router.post("/register", function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      console.log(err);
      req.flash("error", err.message);
      return res.redirect("/register")
    }
    passport.authenticate("local")(req, res, function(){
      req.flash("success", "Welcome to YelpCamp " + req.body.username);
      res.redirect("/campgrounds");
    });
  });
});

// Login route form
router.get("/login", function(req, res){
  res.render("login");
});

//Login Logic
router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
  }), function(req, res){
});

//logout route
router.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "Logged you out!");
  res.redirect("/campgrounds");
});

module.exports = router;