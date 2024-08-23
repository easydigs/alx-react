const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,  // This ensures that the output directory is cleaned before each build.
  },
  devServer: {
    static: path.join(__dirname, 'dist'), // Updated from 'contentBase'
    hot: true,
    port: 8080, // Optionally specify a port number
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',  // Preferred over file-loader for Webpack 5
        generator: {
          filename: 'images/[name][ext]',  // Keeps the image names and places them in the 'images/' directory
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader', // Image optimization loader
            options: {
              disable: process.env.NODE_ENV === 'development', // Disable in development
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // other options...
            },
          },
        ],
        enforce: 'pre', // Ensures image-webpack-loader runs before asset/resource
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devtool: 'inline-source-map',
};
