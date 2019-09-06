// 龙诺萱
// 使用 for..in 遍历对象 nextSource 获取属性值
// 此处会同时检查其原型链上的属性
for (var nextKey in nextSource) {
    // 使用 hasOwnProperty 判断对象 nextSource 中是否存在属性 nextKey
    // 过滤其原型链上的属性
    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
        // 赋值给对象 to,并在遍历结束后返回对象 to
        to[nextKey] = nextSource[nextKey];
    }
}