const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    idHistory: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('comment', commentSchema)