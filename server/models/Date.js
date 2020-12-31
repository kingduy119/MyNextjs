const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model("Date", schema);