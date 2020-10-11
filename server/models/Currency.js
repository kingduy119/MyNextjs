// const mongoose = require("mongoose");
// const User = require("./User");

// const { Schema } = mongoose;
// const mongoSchema = new Schema({
//     usd: { type: Number, default: 0 },
//     vnd: { type: Number, default: 0 },
//     user: { type: Schema.Types.ObjectId, unique: true },
// });

// class Currency {
//     static async getOldOrCreateNew({ userId }) {
//         let currency = await this.findOne({ user: userId });
//         if (!currency) {
//             currency = await this.create({ user: userId });
//             await User.setCurrency({ userId, currencyId: currency.id });
//         }
//         return await currency;
//     }


//     bindUser(id) { this.updateOne({ user: id }); }

// }

// mongoSchema.loadClass(Currency);
// module.exports = mongoose.model("Currency", mongoSchema);