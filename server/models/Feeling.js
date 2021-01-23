const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    arr: [{
        by: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        skin: {
            type: String,
            enum: ['none', 'like', 'heart', 'smile'],
        },
    }]
})


module.exports = mongoose.model('Feelings', schema);