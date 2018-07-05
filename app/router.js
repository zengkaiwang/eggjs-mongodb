module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/login', controller.vue.login);
  router.get('/home/getAllData', controller.vue.getAllData);
  router.post('/posts/create', controller.vue.create);
};