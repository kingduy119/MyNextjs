const bcryptjs = require("bcryptjs");
const salt = bcryptjs.genSaltSync(10);

function hash(string) { return bcryptjs.hashSync(string, salt); }
function compare(string, hash) { return bcryptjs.compareSync(string, hash); }


module.exports = { hash, compare };