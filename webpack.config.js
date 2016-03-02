var path = require('path');

module.exports = {
  context: path.resolve('src/'),
  entry: './app',
  output: {
    path: path.resolve('public','js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['','.ts','.async.ts','.js']
  }
}