// 龙诺萱
var myObject = Object.create( null );
myObject.b = 2;

Object.prototype.hasOwnProperty.call(myObject, "b");
// true