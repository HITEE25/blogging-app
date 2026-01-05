const {Router} = require("express");
const router = Router();

const User = require("../models/user");

router.get("/signin",(req,res) => {
    return res.render("signin");
});

router.get("/signup",(req,res) => {
    return res.render("signup");
});

router.get("/about", (req,res) => {
    return res.render("about",{
        user: req.user,
    });
});

router.get("/contact", (req,res) => {
    return res.render("contact",{
        user: req.user,
    });
});

router.post("/signup",async(req,res) => {
    const {fullName,email,password} = req.body;
    try{
        await User.create({
        fullName,
        email,
        password,
      });
      return res.redirect("/");
    }
    catch (err) {
        // Duplicate key error from MongoDB
        if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
            return res.render("signup", {
            error: "This email is already registered. Please use another email or sign in.",
            });
        }
    }
})

router.post("/signin",async(req,res) => {
    const {email,password} = req.body;
    try{
        const token = await User.matchPasswordAndGenrateToken(email,password);
        console.log(token);
        return res.cookie("token",token).redirect("/");
    }catch(error){
        return res.render("signin",{
            error:"Incoorect password or email",
        })
    }
});

router.get("/logout",(req,res) => {
    res.clearCookie("token").redirect("/");
});

module.exports = router;