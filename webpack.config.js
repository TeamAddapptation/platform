const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/app.js"),
    dashboard: path.resolve(__dirname, "./src/pages/dashboard/dashboard.js"),
    profile: path.resolve(__dirname, "./src/pages/account/profile/profile.js"),
    billing: path.resolve(__dirname, "./src/pages/account/billing/billing.js"),
    dataConnections: path.resolve(
      __dirname,
      "./src/pages/account/dataConnections/dataConnections.js"
    ),
    intentSignalAttribution: path.resolve(
      __dirname,
      "./src/pages/intentSignalAttribution/intentSignalAttribution.js"
    ),
    topicOverview: path.resolve(
      __dirname,
      "./src/pages/topicOverview/topicOverview.js"
    ),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      template: "./src/pages/dashboard/index.html",
      chunks: ["main", "dashboard"],
    }),
    // Account Pages
    new HtmlWebpackPlugin({
      filename: "profile.html",
      inject: "body",
      template: "./src/pages/account/profile/profile.html",
      chunks: ["main", "profile"],
    }),
    new HtmlWebpackPlugin({
      filename: "billing.html",
      inject: "body",
      template: "./src/pages/account/billing/billing.html",
      chunks: ["main", "billing"],
    }),
    new HtmlWebpackPlugin({
      filename: "dataConnections.html",
      inject: "body",
      template: "./src/pages/account/dataConnections/dataConnections.html",
      chunks: ["main", "dataConnections"],
    }),
    //Demo Pages
    new HtmlWebpackPlugin({
      filename: "intentSignalAttribution.html",
      inject: "body",
      template:
        "./src/pages/intentSignalAttribution/intentSignalAttribution.html",
      chunks: ["main", "intentSignalAttribution"],
    }),
    new HtmlWebpackPlugin({
      filename: "topicOverview.html",
      inject: "body",
      template: "./src/pages/topicOverview/topicOverview.html",
      chunks: ["main", "topicOverview"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: "assets/resources",
      },
    ],
  },
};
