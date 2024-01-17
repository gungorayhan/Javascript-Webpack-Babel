## webpack
npm i -D webpack webpack-cli

## script
"build-dev" : "webpack --watch" <br/>
"build" : "NODE_ENV=production webpack --watch" <br/>
"start" : "webpack serve"
npm i build


## babel
npm i @babel/core @babel/preset-env babel-loader

## create new file
webpack.config.js<br/>
.babelrc

## webpack.config.js
npx webpack

<p>
const path = require("path)
const mode = process.env.NODE_ENV === 'production'? 'production':development
mode:mode,
entry: './src/index.js',
output:{
    filename:'bundle.js',
    path: path.resolve(__dirname, 'public')
}
module:{
    
    rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use :{
                loader:'babel-loader'
            }
        }
    ]
},
devtool: 'source-map',
devServer:{
    contentBase:'./dist'
}
</p>

## .babelrc 
{
    "presets" : ["@babel/preset-env"]
}

## npm i -D webpack-dev-server