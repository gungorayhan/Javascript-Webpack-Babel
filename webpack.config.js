const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    entry: ['babel-polyfill','./src/js/index.js'],
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'js/bundle.js'
    },
    devServer:{
        contentBase: './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/, //.js ile biten  tüm dosyaları tara.  $ bitirme noktası devamı yok anlamında
                exclude:/node_modules/, //node_modules dosyarlarını bu işleme dahil etme
                loader:"babel-loader" // işlemi yapacak prograam
            }
        ]
    }
}