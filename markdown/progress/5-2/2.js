// 龙诺萱
// 第一步
let a = {
    name: "longnx",
    age: 18
}
let b = {
    b1: Symbol("longnx"),
    b2: null,
    b3: undefined
}
let c = Object.assign(a, b);
console.log(c);
// {
// 	name: "longnx",
//  age: 18,
// 	b1: Symbol(longnx),
// 	b2: null,
// 	b3: undefined
// } 
console.log(a === c);
// true