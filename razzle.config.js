module.exports = {
  modify(defaultConfig, { target, dev }, webpack) {
    const config = defaultConfig;
    if (target === 'web') {
      config.output.filename = dev ? 'static/js/[name].js' : 'static/js/[name].[hash:8].js';

      console.log(require.resolve('react'));
      // config.entry.vendor = [
      //   require.resolve('razzle/polyfills'),
      //   require.resolve('react'),
      //   require.resolve('react-dom')
      // ];
      // config.entry.admin = [require.resolve('./src/admin')];

      config.optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              // chunks: 'initial',
              // test: /node_modules/,
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              chunks: 'all',
              name: 'vendor',
              enforce: true
            }
          }
        }
      };
    }
    return config;
  }
};
