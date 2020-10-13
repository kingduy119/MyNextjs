// const authenticate = require("./authenticate");
const auth = require("./auth");
const admin = require("./admin");
const post = require("./post");

function api(server) {
    let path = '/v1';
    server.use(customServer);
    server.use(`${path}/`, auth);
    server.use(`${path}/admin`, admin);
    server.use(`${path}/post`, post);
}

function customServer(req, res, next) {
    if (req.user && (req.path == '/login' || req.path == '/google')) {
        return res.redirect('/');
    }
    next();
}

module.exports = api;

