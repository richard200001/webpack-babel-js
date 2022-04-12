const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app:[
            "@babel/polyfill",//transforma el código más nuevo de javascript a un código que
            //sea entendido por navegadores más antiguos
            './src/app/index.js'
        ]
    },
    output : {
        path: path.join(__dirname, 'dist'),//aquí le decimos que cree la carpeta dist
        filename: 'bundle.js'
    },
    devServer: {
        port: 4400
    },
    module: {
        rules:  [
            {
                test: /\.js$/,
                use: "babel-loader",//carga babel
            },
              {
                  test: /\.css$/,
                  use: [MiniCssExtractPlugin.loader, "css-loader"],
              }
          ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {//este minify es para comprimir el archivo final para que quede con menos peso
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ]
}