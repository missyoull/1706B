/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574144937458_4121';

  // add your middleware config here
  config.middleware = [
    'checkLogin'
  ];

  config.security = {
    csrf: {
      ignore: false,
    },
  }

  // add your user config here
  const userConfig = {
    security: {
      csrf: {
        enable: false,
      },
    }
   
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
