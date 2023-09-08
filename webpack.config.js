const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                exclude: ["/node_modules/"],
                test: /\.ejs$/,
                loader: 'ejs-compiled-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/template.ejs',
        }),
    ],
    resolve: {
        fallback: {
            path: false
        }
    },
    externals: ["fs"],
    devServer: {
        historyApiFallback: true
    }
};


