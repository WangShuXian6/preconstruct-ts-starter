'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./airmusic-a-func.cjs.prod.js");
} else {
  module.exports = require("./airmusic-a-func.cjs.dev.js");
}
