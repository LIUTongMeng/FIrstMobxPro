const path = require('path')
module.exports={
    mode:'development',
    entry:{ main:'./src/index.jsx', basemain:'./src/index.js'},
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[ 'env', 'react', 'stage-0'],
                        plugins:['transform-decorators-legacy','transform-class-properties']
                    }
                }
            }
        ]
    },
    devtool:'inline-source-map', //方便调试
    devServer:{
        contentBase:path.resolve(__dirname, 'dist'),
        port:8003
    }
}