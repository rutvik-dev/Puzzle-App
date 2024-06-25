const mongoose = require('mongoose');

const PuzzleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
});

let Puzzle = mongoose.model('Puzzle', PuzzleSchema);
module.exports = Puzzle