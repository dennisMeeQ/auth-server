const express = require("express");
const logger = require("../config/logger.js")("app:routes:user");

const userService = require("../services/user");

const router = new express.Router();

/**
 * Get all users
 */
router.get(
  "",
  // TODO: We should fix the problem rather than just switching off the rule ;)
  // eslint-disable-next-line consistent-return
  async (req, res) => {
    const options = {};

    try {
      const result = await userService.getUsers(options);
      res
        .status(200)
        .json(result)
        .end();
    } catch (err) {
      logger.error(
        `Error (${err.message}) on ${req.method} ${
          req.url
        } with payload ${JSON.stringify(req.body)}.`
      );
      return res.status(500).send({
        status: 500,
        error: "Server error"
      });
    }
  }
);

/**
 * Get one user by userId
 */
router.get(
  "/:userId",
  // TODO: We should fix the problem rather than just switching off the rule ;)
  // eslint-disable-next-line consistent-return
  async (req, res) => {
    const options = {
      userId: req.params.userId
    };

    try {
      const result = await userService.getUserById(options);
      res
        .status(200)
        .json(result)
        .end();
    } catch (err) {
      logger.error(
        `Error (${err.message}) on ${req.method} ${
          req.url
        } with payload ${JSON.stringify(req.body)}.`
      );
      return res.status(404).send({
        status: 404,
        error: "User not found"
      });
    }
  }
);

module.exports = router;
