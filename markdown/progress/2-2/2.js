function Foo() {
    return 'foo';
}
Foo.prototype.method = function() {
    return 'method';
}
function Bar() {
    return 'bar';
}
Bar.prototype = Foo; // Bar.prototype 指向到函数
let bar = new Bar();
console.dir(bar);

bar.method(); // Uncaught TypeError: bar.method is not a function