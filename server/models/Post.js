const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    createAt: { type: Date, default: new Date() },
    updateAt: { type: Date, default: new Date() },
    postBy: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: { type: String, min: 1, }
});


module.exports = mongoose.model("Post", postSchema);
