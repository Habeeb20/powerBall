const express = require("express");

const { requireAuth } = require("../middleware/authMiddleware");
const { checkUser } = require("../middleware/authMiddleware");
const { home, invest, postInvest, profile, home1 } = require("../controller/userController");

const router = express.Router();

router.get("/", home);

router.get("/invest",   checkUser,  invest);
router.post("/invest", postInvest);
router.get("/profile", profile)

module.exports = router;
