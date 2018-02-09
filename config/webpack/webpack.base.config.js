const path = require('path');
const { root, build, entry, output, src } = require('./webpack.env.base.config.js');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${src}/client/index.html`,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  // This is the "main" file which should include all other modules
  entry: [
    entry, 'webpack-hot-middleware/client'
  ],
  // Where should the compiled file go?
  output: {
    path: `${build}`,
    publicPath: `/assets/`,
    filename: '[name].js'
  },
  resolve: {
    alias: {
        vue: 'vue/dist/vue.js'
    }
  },
  module: {
    // Special compilation rules
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
        }
      },
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        loaders: ["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  // devServer: {
  //   hot: true,
  //   contentBase: `${root}/build`,
  //   compress: true,
  //   port: 8080
  // },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin()
  ]
}