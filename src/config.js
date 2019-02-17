require("dotenv").config();
const convict = require("convict");
const path = require("path");

const config = convict({
  env: {
    format: ["prod", "dev", "test"],
    default: "dev",
    arg: "confEnv",
    env: "CONF_ENV"
  },
  db: {
    host: {
      doc: "Database host name/IP",
      format: "*",
      default: "db"
    },
    port: {
      doc: "Database port",
      format: "port",
      default: 27017
    },
    name: {
      doc: "Database name",
      format: String,
      default: "spotzserver"
    }
  },

  server: {
    port: {
      doc: "Port on which node listens",
      format: "port",
      default: 8080
    }
  },

  cors: {
    whitelist: {
      doc: "List of URLs that are whitelisted for CORS",
      format: Array,
      default: []
    }
  },

  argon2: {
    type: {
      doc: "The type of the argon2 mode",
      format: ["argon2.argon2d", "argon2.argon2i", "argon2.argon2id"],
      default: "argon2.argon2d"
    },
    timeCost: {
      doc: "Time cost for Argon2",
      format: "int",
      default: 3
    },
    memoryCost: {
      doc: "Memory cost for Argon2",
      format: "int",
      default: 4096
    },
    parallelism: {
      doc: "How many parallel threads for Argon2",
      format: "int",
      default: 1
    }
  },

  jwt: {
    key: {
      doc: "The key to use for symmetric JWT generation",
      format: String,
      default: "",
      env: "JWT_KEY"
    },
    privateKeyFile: {
      doc: "The file containing the key to use for asymmetric JWT generation",
      format: String,
      default: "",
      env: "JWT_KEYFILE"
    },
    algo: {
      doc: "The algorithm to use for the JWT generation",
      format: ["HS256", "RS256"],
      default: "HS256",
      env: "JWT_ALG"
    }
  }
});

const env = config.get("env");
config.loadFile(path.join(__dirname, `config/${env}.json`));

config.validate({ allowed: "strict" });

module.exports = config.getProperties();
