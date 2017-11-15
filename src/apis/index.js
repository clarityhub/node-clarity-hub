/* eslint-disable */

const fs = require("fs");
const path = require("path");
const apis = {};

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function (file) {
    apis[path.basename(file, '.js')] = require(path.join(__dirname, file));
  });

module.exports = apis;
