const path = require('path')
const OUTPUT_PATH = path.join(__dirname);


module.exports = {
	entry: {
		app: path.join(__dirname, 'src/app.js'),

	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundel.js'
	},
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'src'),
        port: 2222,
		open: true,
		host: 'localhost',
		disableHostCheck: true,
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						],
						plugins: [
							[
								'@babel/plugin-proposal-class-properties',
								{
									'loose': true
								}
							]
						]
					}
				}]
			},{
				test: /\.(svg|png|gif|jpe?g)$/,
				use: [{loader: 'file-loader'}]
			},{
				test: /\.(le|c)ss$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader', options: {
						camelCase: true,
						importLoaders: 1,
						mergeRules: false,
						modules: true,
					}},
					
				]
			}
		]
	},
	plugins: [

	],
	performance: {
		hints: 'warning',
		maxAssetSize: 10000000,	// 1M
		maxEntrypointSize: 10000000,	// 5M
		assetFilter: fileName => fileName.endsWith('.css') || fileName.endsWith('.js')
	}
}