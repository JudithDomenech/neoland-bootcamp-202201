const { Schema } = require('mongoose')
const { Types: { ObjectId }} = Schema

const note = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    text: {
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },

})

module.exports = note