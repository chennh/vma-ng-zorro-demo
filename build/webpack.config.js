module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$|\.sass$/,
        use: [{
          loader: 'sass-loader',
          options: {
            sourceMap: false,
            additionalData: `@import "src/assets/styles/variable.scss";`
          }
        }]
      }
    ]
  },
}
