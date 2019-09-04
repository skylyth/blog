var data = [];// 创建一个数组data;

// 进入第一次循环
{ 
	let i = 0; // 注意：因为使用let使得for循环为块级作用域
	           // 此次 let i = 0 在这个块级作用域中，而不是在全局环境中
    data[0] = function() {
    	console.log(i);
	};
}