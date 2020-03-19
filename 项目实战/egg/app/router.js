'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user', controller.home.getUser);
  router.get('/list', controller.home.getList);
  router.get('/detail', controller.home.getDetailorPinlun);
  router.get('/addbk', controller.home.getAddBk);
  router.get('/adduser', controller.home.getAddRegister);
  router.get('/addpl', controller.home.getAddPinlun);
  
};
