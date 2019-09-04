function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
    var O = R.prototype;// 取 R 的显示原型
    L = L.__proto__;// 取 L 的隐式原型
    while (true) { 
        // Object.prototype.__proto__ === null
        if (L === null) 
          return false; 
        if (O === L)// 这里重点：当 O 严格等于 L 时，返回 true 
          return true; 
        L = L.__proto__; 
    } 
 }
 
 // 测试
 function C(){} 
 function D(){} 
 
 var o = new C();
 
 instance_of(o, C); // true
 instance_of(o, D); // false