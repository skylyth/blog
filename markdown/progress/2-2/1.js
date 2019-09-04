function Foo(name) {
	this.name = name;
}
Foo.prototype.getName = function() {
  	return this.name;
}
Foo.prototype.length = 3;
let foo = new Foo('muyiy'); // 相当于 foo.__proto__ = Foo.prototype
console.dir(foo);