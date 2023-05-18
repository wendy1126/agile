const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    // Proxy: 'http://192.168.0.62:8080'
  }
}
