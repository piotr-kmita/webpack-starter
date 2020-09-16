const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src'),
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
            }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
         'style-loader',
         'css-loader',
         'postcss-loader', 
         'sass-loader',
        ]
      },
    ],
  },
}