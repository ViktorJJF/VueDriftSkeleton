const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, './build'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
    },
  },
};
