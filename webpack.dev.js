const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src'),
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, "./dist")
  },
}