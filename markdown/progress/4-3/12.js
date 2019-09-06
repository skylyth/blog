function  SuperType(){
    this.color=["red", "green", "blue"];
}
function  SubType(){
    // 核心代码，继承自SuperType
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.color.push("black");
console.log(instance1.color);
// ["red", "green", "blue", "black"]

var instance2 = new SubType();
console.log(instance2.color);
// ["red", "green", "blue"]