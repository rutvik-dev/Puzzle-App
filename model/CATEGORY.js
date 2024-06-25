const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true }
});

let Category = mongoose.model('Category', CategorySchema);
module.exports = Category