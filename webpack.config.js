const path = require("path");

module.exports = {
    entry: [path.resolve(__dirname, "src/index.js")],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx?$/,

                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                        ],
                    },
                },
                include: path.join(__dirname, "src"),
            },
        ],
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
    mode: "development",
    //...
    devServer: {
        static: {
            directory: path.join(__dirname),
            watch: true,
        },

        port: 9000,
        open: true,
    },
};
