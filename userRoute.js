const express = require("express");
const { registerUser } = require("./userControler");
const router = express.Router();

router.route("/product").delete(registerUser);
router.route("/login").get(registerUser);

router.route("/register").post(registerUser);
//   .get((req, res) => {
//     res.send("wow");
//   });

module.exports = router;
