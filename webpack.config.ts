import * as path from "path";

import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

type Configuration = webpack.Configuration & {
  devServer: {
    [index: string]: any;
  };
};

const config: Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "AST-Query",
      template: "index.html",
    }),
  ],
};

export default config;
