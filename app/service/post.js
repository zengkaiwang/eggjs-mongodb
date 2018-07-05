const Service = require('egg').Service;

class PostService extends Service {
	//获取所有文章
	async findAll() {
		//注意：只有安装了插件egg-mongoose后 model才会挂载到this.ctx上
		return this.ctx.model.Post.find().sort({ _id: -1}).exec();
	}
}

module.exports = PostService;