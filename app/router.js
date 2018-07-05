module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/login', controller.vue.login);
  router.get('/home/getAllData', controller.vue.getAllData);
  router.post('/posts/create', controller.vue.create);
  router.delete('/itemDelete', controller.vue.delete)	//删除单数数据
  router.get('/getPostDetail', controller.vue.getDetails);	//获取单条数据
  router.post('/post/update', controller.vue.update);	//更新单条数据
};