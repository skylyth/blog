// 龙诺萱
// 判断原生 Object 中是否存在函数 assign2
if (typeof Object.assign2 != 'function') {
    // 使用属性描述符定义新属性 assign2
    Object.defineProperty(Object, "assign2", {
      value: function (target) { 
        ...
      },
      // 默认值是 false，即 enumerable: false
      writable: true,
      configurable: true
    });
  }