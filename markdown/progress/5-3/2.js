// 龙诺萱
function cloneDeep1(source) {
    var target = {};
    for(var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (typeof source[key] === 'object') {
                target[key] = cloneDeep1(source[key]); // 注意这里
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}

// 使用上面测试用例测试一下
var b = cloneDeep1(a);
console.log(b);
// { 
//   name: 'longnx', 
//   book: { title: 'You Don\'t Know JS', price: '45' }, 
//   a1: undefined,
//   a2: {},
//   a3: 123
// }