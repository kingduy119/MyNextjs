const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    postBy: { ref: "User", type: mongoose.Types.ObjectId, required: true },
    content: { type: String, min: 1, },

    likes: [{ ref: 'User', unique: true, type: mongoose.Schema.Types.ObjectId }],
    comments: [{
        // index: true,
        createAt: { type: Date, default: Date.now },
        content: String,
        postBy: { ref: "User", type: mongoose.Types.ObjectId },
        likes: [{ ref: 'User', type: mongoose.Types.ObjectId, unique: true }]
    }]
});


module.exports = mongoose.model("Post", postSchema);
