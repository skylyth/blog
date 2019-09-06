// 龙诺萱
let obj = {
    name: 'longnx',
    a: undefined,
    b: Symbol('longnx'),
    c: function() {}
}
console.log(obj);
// {
// 	name: "longnx", 
// 	a: undefined, 
//  b: Symbol(longnx), 
//  c: ƒ ()
// }

let b = JSON.parse(JSON.stringify(obj));
console.log(b);
// {name: "longnx"}