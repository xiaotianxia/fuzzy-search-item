const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode: 'development',

	entry: {
		index: './src/index.js'
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'fuzzy-search-item.min.js',
		library: 'FuzzySearchItem',
	    libraryTarget: 'umd',
	    umdNamedDefine: true
	},

	resolve: {
    	alias: {
      		vue$: 'vue/dist/vue.esm.js'
    	}
  	},

	module: {
		rules: [
			{
		        test: /\.vue$/,
		        loader: 'vue-loader'
		    },

		    {
		        test: /\.css$/,
		        use: [
		        	{ loader: 'style-loader'},
		        	{ loader: 'css-loader'}
		        ]
		    },

		    {
            	test: /\.less$/,
            	loader: "style-loader!css-loader!less-loader",
          	},


		    {
		        test: /\.js$/,
		        loader: 'babel-loader',
		        include: [path.resolve(__dirname, './src')]
		    }
		]
	},

	plugins: [
		new uglify(),
		// vue-loader插件
        new VueLoaderPlugin()
	],

	devServer: {
		contentBase: path.resolve(__dirname, './dist'),

		host: 'localhost',

		compress: true,

		port: 8888
	}
}