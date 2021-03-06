const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: [
		'./src/index.jsx'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?importLoaders=1',
					{
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
									precss,
									autoprefixer
								];
							}
						}
					}
				]
			}
		]
	},
	externals: {
		react: 'react'
	},
	devtool: 'eval',
	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules')
		],
		extensions: ['.js', '.jsx']
	}
};
