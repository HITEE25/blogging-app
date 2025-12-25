const {Schema,model, Types} = require("mongoose");

const blogSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    coverImageUrl:{
        type: String,
        required: false,
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "user",
    },
},{timestamps: true});

const Blog = model("blog",blogSchema);

module.exports = Blog;
