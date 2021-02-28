const webpack = require("webpack");
const path = require("path");
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/scss/image-gallery.scss";

module.exports = {
  context: __dirname + "/client",
  entry: "./index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "env"],
        },
      },
      {
        // I 've added a new rule and I included the style path from node_modules
        include: path.resolve(
          __dirname,
          "./node_modules/react-image-gallery/styles/scss/image-gallery.scss"
        ),
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: __dirname + "/public",
    filename: "app.js",
  },
};
