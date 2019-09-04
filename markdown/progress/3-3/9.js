// 进入第二次循环
{ 
	let i = 1; // 因为 let i = 1 和上面的 let i = 0     
	           // 在不同的作用域中，所以不会相互影响
	data[1] = function(){
         console.log(i);
	}; 
}