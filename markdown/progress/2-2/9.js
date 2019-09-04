function Animal() {
    this.value = 'animal';
}

Animal.prototype.run = function() {
    return this.value + ' is runing';
}

function Cat() {}
Cat.prototype = new Animal(); 

// 新增，重写 Cat.prototype 的 constructor 属性，指向自己的构造函数 Cat
Cat.prototype.constructor = Cat; 