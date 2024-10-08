const mongoose = require("mongoose")

const posts = new mongoose.Schema({
    _id: String,
    user_id: String,
    caption: String,
    attachments: Array,
    likes: Array,
    edited: Boolean,
    createdAt: Number,
    category: String, //take-off, landing, in-sky, other
    aircraft_model: String,
    approved: Boolean

})

module.exports = mongoose.model('Posts', posts)

