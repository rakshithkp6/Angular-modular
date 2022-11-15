const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'comp',
  exposes: {
    './routes': './src/app/base-comp/base-comp.routes.ts',
    './Module': './src/app/base-comp/base-comp.module.ts',
    './HeaderComponent': './src/app/header-comp/header-comp.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    'config-lib': { singleton: true, strictVersion: true, requiredVersion: '13.0.0' },
  },

});
