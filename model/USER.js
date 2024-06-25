const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    PuzzleId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Puzzle' }], 

});

let User = mongoose.model('User', UserSchema);
module.exports = User