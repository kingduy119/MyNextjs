const auth = require("./authenticate");
const admin = require("./admin");
const post = require("./post");

function api(server) {
    let path = '/v1';
    server.use(`${path}/`, auth);
    server.use(`${path}/admin`, admin);
    server.use(`${path}/post`, post);
}

module.exports = api;

