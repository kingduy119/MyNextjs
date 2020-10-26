const { passToken, requireToken } = require("../controllers/auth");
const auth = require("./auth");
const admin = require("./admin");
const post = require("./post");


function api(server, app) {
    let path = '/v1';
    server.use(`${path}/`, auth);
    server.use(`${path}/admin`, admin);
    server.use(`${path}/post`, post);

    // Router with custom special
    server.get('/', requireToken, (req, res) => {
        app.render(req, res, '/');
    })
    server.get('/login', passToken, (req, res) => {
        app.render(req, res, '/login');
    })
}

module.exports = api;

