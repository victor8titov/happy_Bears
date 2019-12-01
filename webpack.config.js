const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: ["/node_modules/"],
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: ["env"],
                },
              },
            ],
          },
          {
            test: /\.scss$/,
			use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true }
					}, {
						loader: 'postcss-loader',
						options: { sourceMap: true, config: { path: 'postcss.config.js' } }
					}, {
						loader: 'sass-loader',
					options: { sourceMap: true }
					}
				]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
            }
        ],
	   },
	   plugins: [
		new MiniCssExtractPlugin({
		  filename: "main.css",
		})
	  ],
       devServer: {
        contentBase: './dist',
        open: true
      },
}