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
	//删除
	async delete() {
    const {ctx, service} = this;
    const id = ctx.request.body.id;
    try {
	    await service.post.findAndRemove(id);		
	    this.ctx.body = "删除成功"
    } catch(e) {
    	console.log(e, "erererer");
    }
	}
	//获取单条详情
	async getDetails() {
    const {ctx, service} = this;
    console.log(ctx.query)
    const id = this.ctx.query.id;
    const article = await service.post.findById(id);
    if (article) {
      this.ctx.body = article;
    } else {
      console.log('文章不存在或者文章已删除')
    }		
	}
	//更新数据
	async update() {
		const id = this.ctx.request.body.id;
    const title = this.ctx.request.body.title;
    const description = this.ctx.request.body.description;		
    let post = {
    	title: title,
    	description: description
    }
    await this.service.post.update(id, post);
    this.ctx.body = "更新成功"
	}	

}

module.exports = VueController;
