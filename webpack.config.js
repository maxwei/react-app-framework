const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test:/\.js/i,
        use:'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader', 
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(scss|sass)$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ]
  }
};