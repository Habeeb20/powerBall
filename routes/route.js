const express = require("express");

const { requireAuth } = require("../middleware/authMiddleware");
const { checkUser } = require("../middleware/authMiddleware");
const { home, invest, postInvest } = require("../controller/userController");

const router = express.Router();

router.get("/", home);
router.get("/invest", invest);
router.post("/invest", postInvest);

module.exports = router;
