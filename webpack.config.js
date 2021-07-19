const path = require('path');
const webpack =require('webpack');

module.exports = {
  target: 'web',
  mode:'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
  // plugins:[
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  devServer:{
    contentBase:'./dist',
    hot:true
  },

};