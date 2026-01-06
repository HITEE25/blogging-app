const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;

const path = require("path");

const userRoute = require("./routes/user");

const cookieParser = require("cookie-parser");
const {checkForAuthenticationCookie} = require("./middleware/authentication");

const Blog = require("./models/blog");

const blogRoute = require("./routes/blog");
mongoose.set('strictQuery', false);

mongoose
    .connect(process.env.MONGO_URL)
    .then((e) => console.log("mogoDB connected"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));



app.use(express.urlencoded({extended:false}));//to handle form data
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});//to pass user data to res.locals.user

app.use(express.static(path.resolve("./public")));

app.get("/",async(req,res) => {
    const allBlogs = await Blog.find({});
    res.render("home", {
        user: req.user,
        blogs:allBlogs,
    });
})

app.use("/user",userRoute);
app.use("/blog",blogRoute);

app.listen(PORT,() => {
    console.log("server started");
})
