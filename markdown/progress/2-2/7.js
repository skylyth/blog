function Animal(){
    this.names = ["cat", "dog"];
  }
  function Cat(){}
  
  Cat.prototype = new Animal();
  
  var instance1 = new Cat();
  instance1.names.push("tiger");
  console.log(instance1.names); // ["cat", "dog", "tiger"]
  
  var instance2 = new Cat(); 
  console.log(instance2.names); // ["cat", "dog", "tiger"]