const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const wordsSchema = new Schema({
    word: {
        type: String,
        required: true,
        unigue: true,
        index: true,
        trim: true
    },
    translate: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        default: 0,
        min: 0
    }
});

wordsSchema.index({word: 1, rank: 1})


module.exports = mongoose.model('Word', wordsSchema);
