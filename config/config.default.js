// config/config.default.js
module.exports = appInfo=> {
	const config = exports = {};

	config.keys = 'sfjslfjlsfjldf';

	//配置数据库插件
	config.mongoose = {
		url: 'mongodb://127.0.0.1:27017/blog',
		option: {
			server: {
				poolSize: 20
			}
		}
	};	

	return config;

}