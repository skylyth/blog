// 龙诺萱
Object.defineProperty(Object, "b", {
    value: function() {
        console.log("log b");
    }
});

Object.getOwnPropertyDescriptor(Object, "b");
// {
// 	value: ƒ, 
//  writable: false, 	// 注意这里是 false
//  enumerable: false,  // 注意这里是 false
//  configurable: false	// 注意这里是 false
// }