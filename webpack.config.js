const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  mode:'development',
  entry:{
    index:'./src/index.jsx'
  } ,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx|ts|tsx)/i,
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // use:[
        //   {
        //   loader:'url-loader',
        //   options:{
        //     limit:10240
        //   }
        // }]
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        // use:'file-loader'
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
  ],
  devServer:{
    contentBase:'./dist',
    hot:true
  },

};