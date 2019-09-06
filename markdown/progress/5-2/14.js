// 龙诺萱
var a = "abc";
var b = {
    v1: "def",
    v2: true,
    v3: 10,
    v4: Symbol("foo"),
    v5: null,
    v6: undefined
}

var obj = Object.assign(a, b); 
console.log(obj);
// { 
//   [String: 'abc']
//   v1: 'def',
//   v2: true,
//   v3: 10,
//   v4: Symbol(foo),
//   v5: null,
//   v6: undefined 
// }