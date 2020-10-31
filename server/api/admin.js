
// const router = require("express").Router();
// const ProfileMgr = require("../controllers/ProfileManager");

// router.get('/', async (req, res, next) => {
//     res.send(req.query);
// })

// router.post('/create', async (req, res, next) => {
//     let { error, state, data } = await ProfileMgr.onHandleRequest("create", req.body);
//     if (error) return res.status(500).json({ error });

//     return res.status(200).json({ state, data });
// });

// router.get('/list', async (req, res, next) => {
//     let { error, state, data } = await ProfileMgr.listUser();
//     if (error) return res.status(500).json({ error });

//     return res.status(200).json({ state, data });
// })

// router.get('/user/:id', async (req, res, next) => {
//     let { error, state, data } = await ProfileMgr.onHandleRequest("find-user", { username: req.params.id });
//     if (error) return res.status(500).json({ error });

//     return res.status(200).json({ state, data });
// });

// router.put('/update', async (req, res, next) => {
//     let { error, state } = await ProfileMgr.onHandleRequest("update", req.body);
//     if (error) return res.status(500).json({ error });

//     return res.status(200).stajsontus({ state });
// });

// router.delete('/delete', async (req, res, next) => {
//     let { error, state } = await ProfileMgr.onHandleRequest("delete", req.body);
//     if (error) return res.status(500).json({ error });

//     return res.status(200).json({ state });
// });

// module.exports = router;