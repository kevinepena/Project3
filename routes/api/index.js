const router = require("express").Router();
const articleRoutes = require("./articles");
const adminRoutes = require("./admin");


// admin routes
router.use("/admin", adminRoutes)

// articles routes
router.use("/articles", articleRoutes);


module.exports = router;
