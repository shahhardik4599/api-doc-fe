const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        library: {
            name: "DocAiAssist",
            type: "umd",
            export: "default"
        },
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: { loader: 'html-loader' }
            }
        ],
    },
    resolve: {
        fallback: {
            path: false,
            fs: false
        }
    },
    plugins: [],
    target: 'web',
};
