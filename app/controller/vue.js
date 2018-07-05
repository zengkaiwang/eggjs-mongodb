const Controller = require('egg').Controller;

class VueController extends Controller {
	//前后端分离登录接口
	async login() {
		this.ctx.body = "登入成功";		//响应前端http请求
	}

	//获取所有数据
	async getAllData() {
		//从数据库获取数据
		const dataList = await this.service.post.findAll();
		//响应前端http请求
		this.ctx.body = dataList;
	}	

	//新建
	async create() {
    const {
        ctx,
        service
    } = this;
    // 通过ctx上下文拿到请求的相关字段
    const title = ctx.request.body.title;
    const description = ctx.request.body.description;
    let post = {
        title: title,
        description: description
    };
    await service.post.create(post);
    this.ctx.body = '新建成功'
	}	
}

module.exports = VueController;
