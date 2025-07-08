// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV === "production"; // 👈 Check environment

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: isProd ? "/odin-weather-app/" : "/", // 👈 Dynamic path for GH Pages
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
    open: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: path.resolve(__dirname, "public", "favIcon.svg"), // 👈 Still works for both modes
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[contenthash].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
              publicPath: "assets/",
            },
          },
        ],
      },
    ],
  },
};
