const {Router} = require("express");
const multer = require("multer");
const path = require("path");

const Blog = require("../models/blog");
//const user = require("../models/user");
const Comment = require("../models/comment");

//disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('./public/uploads'));
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

const router = Router();

router.get("/addBlog", (req,res) => {
    return res.render("addBlog",{
        user: req.user,
    });
});

router.get("/add-blog", (req,res) => {
    return res.render("addBlog",{
        user: req.user,
    });
});

//we have to upload single image
router.post("/",upload.single("coverImageUrl"),async(req,res) => {
  const {title,content} = req.body;
  const blog = await Blog.create({
    title,
    content,
    createdBy: req.user._id,
    coverImageUrl: `/uploads/${req.file.filename}`,
  })
  return res.redirect(`/blog/${blog._id}`);
})

router.get("/:id",async(req,res) => {
  const blog = await Blog.findById(req.params.id).populate("createdBy");
  const comments = await Comment.find({ blogId: req.params.id }).populate("createdBy");
  return res.render("blog",{
    user: req.user,
    blog,
    comments,
  })
})

router.post("/comment/:blogId",async(req,res) => {
  await Comment.create({
    comment: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });
  return res.redirect(`/blog/${req.params.blogId}`);
})


module.exports = router;