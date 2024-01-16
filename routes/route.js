const express = require("express");
const { home, register, postRegister, invest } = require("../controller/userController");
const {requireAuth} = require("../middleware/authMiddleware");
const {checkUser} = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/", home )
router.get("/invest", requireAuth, checkUser, invest )



module.exports = router