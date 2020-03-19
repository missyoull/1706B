'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  //登陆
  router.post('/user/login', controller.user.login);
  //添加
  router.post('/user/add', controller.user.add);
  //删除
  router.post('/user/del', controller.user.del);
  //更新
  router.post('/user/updata',controller.user.updata);
  //读取全部
  router.get('/user/list',controller.user.list);
  //读取一个
  router.get('/user/one',controller.user.one);
};
