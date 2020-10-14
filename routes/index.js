const router = require("express").Router();
const dbRoutes = require('./db')
const viewRoutes = require('./views')
const apiRoutes = require('./api')



router.use("/",viewRoutes)
router.use("/db",dbRoutes)
router.use("/api/v1",apiRoutes)



module.exports = router;