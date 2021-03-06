const router = require("express").Router();
const auth = require("./api/auth");

router.use("/api", auth);

module.exports = router;