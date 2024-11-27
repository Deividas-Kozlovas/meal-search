const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // Use 'production' for deployment
  entry: "./src/app.js", // Main JS entry point
  output: {
    path: path.resolve(__dirname, "build"), // Output directory for production build
    filename: "app.[contenthash].js", // Cache busting for JS files
    clean: true, // Clean up the build directory before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]", // Output path for images
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Template for the HTML file
      filename: "index.html", // Output filename
    }),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css", // Cache busting for CSS files
    }),
  ],
  devtool: "source-map", // Enable source maps in development
  devServer: {
    static: "./public", // Directory to serve static files
    port: 3000, // Port number for dev server
    open: true, // Automatically open the browser
    devMiddleware: {
      writeToDisk: true, // Write files to disk in the 'public' folder
    },
    historyApiFallback: true, // Handle client-side routing with HTML5 History API
  },
};
