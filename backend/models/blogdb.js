const mongoose = require("mongoose");

const Schema =  mongoose.Schema;


//SCHEMA
const BlogSchema = new Schema({

    title:String,

    
    description:String

    });
    
 //Model   
const Blog = mongoose.model('blog',BlogSchema);

module.exports = Blog;