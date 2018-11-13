const path = require( "path" );

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "app.bundle.js",
    },
    devServer: {
        contentBase: path.join( __dirname, "dist" ),
        compress: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "@babel/preset-react", "@babel/preset-env" ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ],
            },
        ],
    },
};
