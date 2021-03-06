const router = require("express").Router();
const auth = require("./api/auth");
const classroom = require("./api/classroom");

router.use("/api", auth);
router.use("/api", classroom);

module.exports = router;