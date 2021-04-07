const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = (config, options) => {
  config.module.rules.push({
    test: /\.scss$|\.sass$/,
    use: [{
      loader: 'sass-loader',
      options: {
        sourceMap: false,
        additionalData: `@import "src/assets/styles/variable.scss";`
      }
    }]
  })

  if (options && options.optimization) {
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.(js|css)$/,
        filename: '[path][base].gz',
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }
}
