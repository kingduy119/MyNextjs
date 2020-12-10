const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

module.exports = mongoose.model("Like", schema);
