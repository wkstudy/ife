const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
		entry: path.resolve(__dirname, './src/js/index.js'),
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, './dist/js/')
		},
		mode: 'development',
		module: {
			rules: [{
					test: /\.js$/,
					exclude: path.resolve(__dirname, 'node_modules'),
					loader: "babel-loader"
				}, {
					test: /\.css$/,
					use: [{
						loader: 'style-loader'
					}, {
						loader: 'css-loader'
					}]
				}, {
					test: /.san$/,
					include: /src/,
					use: [{
						loader: 'san-loader'
					}]
				},
				 {
	                test: /.html$/,
	                use: {
	                    loader: "html-loader",
	                    options: {minimize: true}
	                }
	            },

			]
		},
	plugins: [
		new htmlWebpackPlugin({
     		 template: './src/index.html',
     		 filename:'../index.html'
		})
	]
}