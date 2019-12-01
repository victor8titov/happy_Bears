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
			test: /main\.scss$/,
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