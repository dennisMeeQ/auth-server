const argon2 = require("argon2");
const logger = require("../config/logger.js")("auth:services:auth");
const config = require("../config");

/**
 * @param {Object} options
 * @param {String} options.password The password to generate the hash for
 * @throws {Error}
 * @return {Promise}
 */
module.exports.generateHash = async password => {
  const argonOptions = config.argon2;

  try {
    return await argon2.hash(password, argonOptions);
  } catch (error) {
    logger.error(`Error verifying password: ${error.message}`);
    throw error;
  }
};

/**
 * @param {Object} options
 * @param {String} options.user The user to check the password for
 * @param {String} options.passwordToCheck The password to check against
 * @throws {Error}
 * @return {Promise}
 */
module.exports.isPasswordCorrectForUser = async (user, passwordToCheck) => {
  if (!user || !user.password || !passwordToCheck) {
    return false;
  }
  try {
    return await argon2.verify(user.password, passwordToCheck);
  } catch (error) {
    logger.error(`Error verifying password: ${error.message}`);
    return false;
  }
};
