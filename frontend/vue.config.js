const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/style.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
  },
});
