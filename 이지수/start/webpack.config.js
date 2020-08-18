module.exports = {
    entry: [
        "./src/index.js"
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "bable-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
        ]
    },
    resolve: {
        extensions: ["*", ".js", "jsx"]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        port: 3000
    }

}
