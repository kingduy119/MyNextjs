const Notification = require("../models/Notification");
const User = require("../models/User");

exports.onCreate = async (req, res) => {
    return res.send(`Notification: ${req.params.id} `);
}
exports.onRead = async (req, res) => {
    return res.send(`Notification: ${req.params.id} `);
}
exports.onUpdate = async (req, res) => {
    return res.send(`Notification: ${req.params.id} `);
}
exports.onDelete = async (req, res) => {
    return res.send(`Notification: ${req.params.id} `);
}


