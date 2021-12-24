'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./my-a-func.cjs.prod.js");
} else {
  module.exports = require("./my-a-func.cjs.dev.js");
}
