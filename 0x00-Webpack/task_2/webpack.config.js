const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,  // Handle CSS files
        use: ['style-loader', 'css-loader'],  // Process and inject CSS
      },
      {
        test: /\.(png|jpg|gif)$/i,  // Handle image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',  // Save images to /public/images/
            },
          },
          {
            loader: 'image-webpack-loader',  // Optimize images
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
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
              // WebP provides better compression and can be enabled as well
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  performance: {
    maxAssetSize: 1000000,  // Set a higher asset size limit (1MB) to avoid warnings
  },
};
