// 龙诺萱
var myObject = Object( "abc" );

Object.getOwnPropertyNames( myObject );
// [ '0', '1', '2', 'length' ]

Object.getOwnPropertyDescriptor(myObject, "0");
// { 
//   value: 'a',
//   writable: false, // 注意这里
//   enumerable: true,
//   configurable: false 
// }