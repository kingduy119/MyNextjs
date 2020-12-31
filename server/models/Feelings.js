const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    feelings: [{
        by: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        kind: {
            type: String,
            enum: ['none', 'like', 'heart', 'smile'],
        }
    }]
})


module.exports = mongoose.model('Feelings', schema);

