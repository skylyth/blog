// 龙诺萱
// 此处 a 是文章开始的测试用例
var sym1 = Symbol("a"); // 创建新的symbol类型
var sym2 = Symbol.for("b"); // 从全局的symbol注册?表设置和取得symbol

a[sym1] = "localSymbol";
a[sym2] = "globalSymbol";

var b = cloneDeep4(a);
console.log(b);
// {
// 	name: "longnx",
// 	a1: undefined,
//	a2: null,
// 	a3: 123,
// 	book: {title: "You Don't Know JS", price: "45"},
// 	circleRef: {name: "longnx", book: {…}, a1: undefined, a2: null, a3: 123, …},
//  [Symbol(a)]: 'localSymbol',
//  [Symbol(b)]: 'globalSymbol'
// }