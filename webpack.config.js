var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './client/app/index.js'
  ],
  output: {
    path: __dirname + '/client/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, include: __dirname + '/client/app', loader: "babel-loader"},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
