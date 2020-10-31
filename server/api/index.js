const { tokenRequire, tokenLogin } = require("../validators/auth")
const auth = require("./auth");
const post = require("./post");


function api({ server, app }) {
    let path = '/v1';
    server.use(`${path}/`, auth);
    server.use(`${path}/post`, post);

    // Router with custom special
    server.get('/', tokenRequire, (req, res) => {
        app.render(req, res, '/');
    })
    server.get('/login', tokenLogin, (req, res) => {
        app.render(req, res, '/login');
    })
}

module.exports = api;

