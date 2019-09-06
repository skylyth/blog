// 第三版
Function.prototype.call2 = function (context) {
    context = context ? Object(context) : window; // 实现细节 1 和 2
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result; // 实现细节 2
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

function foo() {
    console.log(this);
}

bar.call2(null); // 2
foo.call2(123); // Number {123, fn: ƒ}

bar.call2(obj, 'kevin', 18);
// 1
// {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }