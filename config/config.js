var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'optimed-panacea'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/optimed-panacea-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'optimed-panacea'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/optimed-panacea-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'optimed-panacea'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/optimed-panacea-production'
  }
};

module.exports = config[env];
