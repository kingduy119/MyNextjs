const NodeCache = require("node-cache");
const cache = new NodeCache();
// class Cache {
//     constructor(ttl) {
//         if (Cache.exists) { return Cache.instance; }
//         Cache.instance = this;
//         Cache.exists = true;

//         this.cache = new NodeCache({
//             stdTTL: ttl,
//             checkperiod: ttl * 0.2,
//             useClones: false,
//         });
//     }

// }




module.exports = cache;
