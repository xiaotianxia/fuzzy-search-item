const api = {
	user: {
		searchUsers (params) {
			console.log('请求参数', params);
			let res = {status:0,data:{list: [{userId: 1, userName: '张三', address: '北京市海淀区xxx路30号'},{userId: 2, userName: '李四', address: '北京市昌平区yyy路38号'}]}};
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log('返回数据', res);
	             	resolve(res);
	        	}, 500)
			})
		}
	}
}