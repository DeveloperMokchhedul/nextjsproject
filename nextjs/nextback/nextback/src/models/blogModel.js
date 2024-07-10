import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
});

const Blog = mongoose.model.Blog || mongoose.model("Blog", blogSchema)
export default Blog;