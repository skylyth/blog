function Car(color) {
    this.color = color;
}
Car.prototype.start = function() {
    console.log(this.color + " car start");
}

var car = new Car("black");
car.color; // 访问构造函数里的属性
// black

car.start(); // 访问原型里的属性
// black car start