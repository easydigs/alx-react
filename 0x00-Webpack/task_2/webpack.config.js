const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // rule to handle CSS files
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // rule for images
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]', // Use the original path and name
            outputPath: 'images/', // Output folder for images
          },
        },
      },
    ],
  },
};
