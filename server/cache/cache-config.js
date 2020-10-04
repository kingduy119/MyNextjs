// const cache = require("memory-cache");
// const logger = require("../utils/logger");

// module.exports = () => {
//     cache.put("cache-1", "one");
//     logger.log("info", cache.get("cache-1"));

//     cache.put("cache-timeout", "setTimeout", 100, (key, value) => {
//         logger.log("info", `${key} + did + ${value}`);
//     })
//     logger.log("info", `cache-timeout will now 1 + ${cache.get("cache-timeout")}`);

//     setTimeout(() => {
//         logger.log("info", `cache-timeout will now 2+ ${cache.get("cache-timeout")}`);
//     }, 200);
// }

