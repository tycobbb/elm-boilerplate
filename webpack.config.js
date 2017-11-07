const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle-[hash].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.elm']
  },
  module: {
    rules: [{
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      use: {
        loader: 'elm-webpack-loader',
        options: {
          cwd: path.resolve('./'),
          debug: true
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Boilerplate'
    })
  ]
}
