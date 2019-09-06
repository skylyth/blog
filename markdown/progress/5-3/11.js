// 龙诺萱
var obj1 = {};
var obj2 = {a: obj1, b: obj1};

obj2.a === obj2.b; 
// true

var obj3 = cloneDeep2(obj2);
obj3.a === obj3.b; 
// false