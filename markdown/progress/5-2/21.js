// 龙诺萱
var myObject = Object('abc'); 

Object.getOwnPropertyDescriptor(myObject, '0');
// { 
//   value: 'a',
//   writable: false, // 注意这里
//   enumerable: true,
//   configurable: false 
// }

myObject[0] = 'd';
// 'd'

myObject[0];
// 'a'