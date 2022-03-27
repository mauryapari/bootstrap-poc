const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
      index: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
     new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        filename: 'index.html'
     }),
     new HtmlWebpackPlugin({
        template: './src/modals.html',
        inject: true,
        filename: 'modals.html'
     }),
     new HtmlWebpackPlugin({
        template: './src/pages/spinners.html',
        inject: true,
        filename: 'spinners.html'
     }),
     new HtmlWebpackPlugin({
        template: './src/pages/tables.html',
        inject: true,
        filename: 'tables.html'
     }),
     new HtmlWebpackPlugin({
        template: './src/pages/form.html',
        inject: true,
        filename: 'form.html'
     }),
     new HtmlWebpackPlugin({
        template: './src/pages/form-elements.html',
        inject: true,
        filename: 'form-elements.html'
     }),
     new HtmlWebpackPlugin({
        template: './src/pages/form-validation.html',
        inject: true,
        filename: 'form-validation.html'
     })
  ]
}