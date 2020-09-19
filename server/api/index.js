const admin = require("./admin");
const auth = require("./authenticate");

function api(server) {
    let path = '/v1';
    server.use(`${path}/`, auth);
    server.use(`${path}/admin`, admin);
}

module.exports = api;