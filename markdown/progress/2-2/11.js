function Animal() {
    this.value = 'animal';
}

Animal.prototype.run = function() {
    return this.value + ' is runing';
}

function Cat() {}
Cat.prototype = new Animal(); 
Cat.prototype.constructor = Cat; 

// 新增
Cat.prototype.run = function() {
  return 'cat cat cat';
}

var instance = new Cat();
instance.value = 'cat'; 
console.log(instance.run()); // cat cat cat