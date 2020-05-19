module.exports = {
  devServer: {
    // proxy: 'http://127.0.0.1:8088',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}