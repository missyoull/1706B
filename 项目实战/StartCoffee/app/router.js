'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  /** 
   *  GET     /posts      index 
   *  GET     /posts/:id  show
   *  POST    /posts      new
   *  PUT     /posts/:id  update
   *  DELETE  /posts/:id  destory
  */
  // 配置用户路由
  router.resources('/user', controller.user);
};
