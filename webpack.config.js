const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: ['react', 'env'],
            plugins: [
              [
                '@quickbaseoss/babel-plugin-styled-components-css-namespace',
                { rawCssNamespace: '.root' },
              ],
              'styled-components'
            ],
          }
        }
      }
    ]
  },
  plugins: [
    htmlPlugin
  ]
};