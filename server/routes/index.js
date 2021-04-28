const auth = require("./auth");
const user = require("./user");
// const post = require("./post");
// const notification = require("./notification.route");
const AuthCtl = require("../controllers/auth");

const AuthValidator = require("../validators/auth");

function api({ server, app }) {
    let path = '/v1';
    server.use(`${path}/`, auth);
    // server.use(`${path}/user`, user);
    // server.use(`${path}/post`, post);
    // server.use(`${path}/notification`, notification);

    // Publib router
    server.get(
        '/',
        AuthCtl.requiredToken,
        (req, res) => { app.render(req, res, '/'); }
    );

    server.get(
        '/login',
        AuthCtl.checkToken,
        (req, res) => { app.render(req, res, '/login'); }
    );
}

module.exports = api;

