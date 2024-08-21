const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Process image files
        type: 'asset/resource',
        use: [
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  mode: 'production',
};
