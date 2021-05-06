const mongoose = require('mongoose')
const Blog = mongoose.model('Blog', {
    message: String,
});
module.exports = Blog
