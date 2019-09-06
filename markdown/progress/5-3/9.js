// 龙诺萱
// 此处 a 是文章开始的测试用例
a.circleRef = a;

var b = cloneDeep3(a);
console.log(b);
// {
// 	name: "longnx",
// 	a1: undefined,
//	a2: null,
// 	a3: 123,
// 	book: {title: "You Don't Know JS", price: "45"},
// 	circleRef: {name: "longnx", book: {…}, a1: undefined, a2: null, a3: 123, …}
// }