const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode,
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "[name].js"
  },
  resolve : {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    port: 3000,
    historyApiFallback: true
  }
}