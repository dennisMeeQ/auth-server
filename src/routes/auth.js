const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
// const logger = require('../config/logger.js')('app:routes:auth');

const config = require("../config");

const router = new express.Router();

/**
 * Login
 */
router.post("/login", (req, res) =>
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({
        message: "Unauthenticated"
      });
    }

    return req.login(user, { session: false }, error => {
      if (error) {
        res.send(error);
      }

      const payload = {
        sub: user.userId,
        name: user.username
      };

      const token = jwt.sign(payload, config.jwt.key);
      return res.json({ token });
    });
  })(req, res)
);

module.exports = router;
