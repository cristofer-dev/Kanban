const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');

const cssModules = 'modules&importLoaders=1&LocalIdentName=[name]__[local]__[hash:base64:5]';
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractVendorCSS = new ExtractTextPlugin('stylesheets/vendors.css');
const t = path.resolve(__dirname)

module.exports = {
	resolve: {
		extensions: ['.js','.jsx']
	},

	entry: ['./src/index.jsx'],
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	},

	module: {
		loaders:[
			{ test: /(\.js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader'] },
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, 'src/components'),
				],
				loader: extractCSS.extract({
					fallback: 'style-loader',
					use: [`css-loader?${cssModules}`],
				})
			},
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, 'src/assets'),
				],
				loader: extractVendorCSS.extract({
					use: ['css-loader'],
				})
			}

		]
	},

	devServer: {
		host: '0.0.0.0',
		port: 5001,
		inline: true
	},

	plugins: [
		new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
		extractCSS,
		extractVendorCSS,
	]
}
