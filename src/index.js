const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const chalk = require("chalk");
const cors = require("cors");
const passport = require("passport");
const logger = require("./config/logger.js")("app:index");
const config = require("./config");

const app = express();

app.set("port", 8080);
const server = http.createServer(app);

// CORS
const corsOptions = {
  origin: config.cors.whitelist
};
app.use(cors(corsOptions));

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
require("./config/passport");

// Database
const dbUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", () => {
  logger.error(chalk.bgRed.black("Error: No database connection"));
});
db.once("open", () => {
  logger.info(chalk.bgGreen.black("Database connection succesfull"));
});

/*
 * Routes
 */
app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));

// catch 404
app.use((req, res) => {
  logger.error(`Error 404 on ${req.url}.`);
  res.status(404).send({ status: 404, error: "Not found" });
});

// catch errors
app.use((err, req, res) => {
  const status = err.status || 500;
  logger.error(
    `Error ${status} (${err.message}) on ${req.method} ${
      req.url
    } with payload ${JSON.stringify(req.body)}.`
  );
  res.status(status).send({ status, error: "Server error" });
});

// start server
server.listen(config.server.port);
