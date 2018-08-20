const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  mode: "production"
};

