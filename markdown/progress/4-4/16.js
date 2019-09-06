var fNOP = function () {};			// 创建一个空对象
fNOP.prototype = this.prototype; 	// 空对象的原型指向绑定函数的原型
fBound.prototype = new fNOP();		// 空对象的实例赋值给 fBound.prototype