const logger = require("../config/logger.js")("auth:services:user");
const User = require("../models/user");

/**
 * @param {Object} options
 * @param {String} options.userId The userId (UUID v4) of the user
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getUserById = async ({ userId }) => {
  let user;

  try {
    user = await User.findOne({ userId }, { _id: 0, __v: 0, password: 0 });
  } catch (error) {
    logger.error(`Error retrieving user: ${error.message}`);
    throw error;
  }

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
};

/**
 * @param {Object} options
 * @param {String} options.username The username of the user
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getUserByNameWithPassword = async ({ username }) => {
  let user;

  try {
    user = await User.findOne({ username }, { _id: 0, __v: 0 });
  } catch (error) {
    logger.error(`Error retrieving user: ${error.message}`);
    throw error;
  }

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
};

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
module.exports.getUsers = async () => {
  let users;

  try {
    users = await User.find({}, { _id: 0, __v: 0, password: 0 });
  } catch (error) {
    logger.error(`Error retrieving users: ${error.message}`);
    throw error;
  }

  return users;
};
