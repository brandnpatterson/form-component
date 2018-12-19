const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev && 'inline-source-map',
  stats: 'minimal',
  entry: './public/src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/js/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
