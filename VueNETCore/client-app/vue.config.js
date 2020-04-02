module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/VueNETCore/',
};
