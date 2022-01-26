const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title: String,
    articleBody:String,
});
module.exports = mongoose.model('post',schema)