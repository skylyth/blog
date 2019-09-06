// 测试用例
function Car(color) {
    this.color = color;
}
Car.prototype.start = function() {
    console.log(this.color + " car start");
}

var car = create(Car, "black");
car.color;
// black

car.start();
// black car start