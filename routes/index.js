var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function (req, res) {
    res.render("landing");
});

//show reg form
router.get("/register", (req, res) => {
    res.render("register");
});
//reg logic
router.post("/register", (req, res) => {
    var newUser = new User({
        username: req.body.username
    });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, () => {
            req.flash("success", "Successfully registred, " + user.username); 
            res.redirect("/campgrounds");
        })
    });
});

//show login form
router.get("/login", (req, res) => {
    res.render("login");
});
//login logic
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), (req, res) => {})

//logout route
router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "Logged out!"); 
    res.redirect("/campgrounds");
})

//middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;