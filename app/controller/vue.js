const Controller = require('egg').Controller;

class VueController extends Controller {
	//前后端分离登录接口
	async login() {
		this.ctx.body = "登入成功";		//响应前端http请求
	}
}

module.exports = VueController;
