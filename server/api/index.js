const auth = require("./authenticate");
const admin = require("./admin");

function api(server) {
    let path = '/v1';
    server.use(`${path}/`, auth);
    server.use(`${path}/admin`, admin);
}

module.exports = api;