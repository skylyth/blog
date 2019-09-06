// 上面代码等同于
var arr = [].slice.call(arguments)；

ES6:
let arr = Array.from(arguments);
let arr = [...arguments];