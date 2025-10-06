const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common')
const packageJson = require('../package.json');

const DOMAIN = process.env.DOMAIN || 'http://localhost:8080';
const prodConfig = {
    mode: 'development',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/lastest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketingModule: `marketingModule@${DOMAIN}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)