"use strict";

require("dotenv").config();

const PRODUCTION = require("./production");
const DEVELOPMENT = require("./development");
const QA = require("./qa");
//NODE_ENV permite identificar el ambiente en el que se encuentra actualmente nuestra app
const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if (NODE_ENV === "production") {
  currentEnv = PRODUCTION;
} else if (NODE_ENV === "qa") {
  currentEnv = QA;
}

module.exports = currentEnv;
