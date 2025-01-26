const express = require('express');
const { loginController, registerController } = require("../controllers/userController");

//router pbject
const router = express.Router();

//router
//POST || LOGIN
router.post("/login",loginController );

//POST || REGISTER
router.post("/register", registerController);

module.exports = router;