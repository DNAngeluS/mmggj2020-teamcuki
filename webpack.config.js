const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: {
		app: './src/main.ts',
		vendors: ['phaser']
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(gif|png|jpe?g|svg|xml|mp4|wav)$/i,
				use: 'file-loader'
			},
			{
				test: [/\.vert$/, /\.frag$/],
				use: 'raw-loader'
			}
		]
	},

	devtool: 'inline-source-map',

	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [new TsconfigPathsPlugin()]
	},

	output: {
		filename: 'app.bundle.js',
		// filename: 'bundle.min.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'mmggj2020-teamcuki/'
	},
	mode: 'development',
	devtool: false,
	performance: {
		maxEntrypointSize: 900000,
		maxAssetSize: 900000
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		host: '0.0.0.0',
		https: false
	},

	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'index.html'),
				to: path.resolve(__dirname, 'dist')
			},
			{
				from: path.resolve(__dirname, 'src/assets', '**', '*'),
				to: path.resolve(__dirname, 'dist/assets')
			}
		]),
		new webpack.DefinePlugin({
			'typeof CANVAS_RENDERER': JSON.stringify(true),
			'typeof WEBGL_RENDERER': JSON.stringify(true),
			'typeof EXPERIMENTAL': JSON.stringify(true),
			'typeof PLUGIN_CAMERA3D': JSON.stringify(false),
			'typeof PLUGIN_FBINSTANT': JSON.stringify(false),
			'typeof FEATURE_SOUND': JSON.stringify(true)
		}),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],

	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		},
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					output: {
						comments: false
					}
				}
			})
		]
	}
};
