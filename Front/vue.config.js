module.exports = {
  publicPath: "/",
  outputDir: "dist",
  css: {
    loaderOptions: {
      less: {
        // 使用@mixin需要配置true
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "OCTPlatform";
      return args;
    });
  }
};
