const express = require("express");
const router = express.Router();
const usersRoutes = require("./usersRoutes.js");
const todosRoutes = require("./todosRoutes.js");

router.use("/api", usersRoutes);
router.use("/api", todosRoutes);

module.exports = router;
