module.exports = {
    entry: {
        "entry": "./entry.js",
    },
    output: {
        path: __dirname,
        publicPath: '/static/devtest/js/webpack_vue_test/',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loader: "css" },
            { test: /\.ts$/, loaders: ["ts-loader"] },
            { test: /\.es6$/, loader: "babel" ,exclude: /node_modules/},
        ]
    }
};
