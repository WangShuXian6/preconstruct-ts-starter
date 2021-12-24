'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./wsx-a-func.cjs.prod.js");
} else {
  module.exports = require("./wsx-a-func.cjs.dev.js");
}
