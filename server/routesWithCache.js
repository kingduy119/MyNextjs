// const LRUCache = require('lru-cache');

// function routesWithCache({ server, app }) {
//     const ssrCache = new LRUCache({
//         max: 100, // 100 items
//         maxAge: 1000 * 60 * 60, // 1 hour
//     });

//     function getCacheKey(req) {
//         console.log(`WITH_CACHE: ${req.user}`);
//         console.log(`WITH_CACHE-req.url: ${req.url}`);
//         console.log(`WITH_CACHE-req.query: ${JSON.stringify(req.query)}`);

//         return `${req.url}`;
//     }

//     async function renderAndCache(req, res, pagePath, queryParams) {
//         const key = getCacheKey(req);

//         // If have page in the cache, let's serve it
//         if (ssrCache.has(key)) {
//             res.setHeader('x-cache', 'HIT');
//             res.send(ssrCache.get(key));
//             return;
//         }

//         try {
//             const html = await app.renderToHTML(req, res, pagePath, queryParams)

//             if (res.statusCode !== 200) {
//                 res.send(html);
//                 return
//             }

//             // Let's cache this page
//             ssrCache.set(key, html);

//             res.setHeader('x-cache', 'MISS');
//             res.send(html);
//         } catch (err) {
//             app.renderError(err, req, res, pagePath, queryParams);
//         }
//     }

//     server.get('/', (req, res) => {
//         renderAndCache(req, res, '/');
//     })
// }

// module.exports = routesWithCache;

