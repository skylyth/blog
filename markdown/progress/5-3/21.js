var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 

// arr2 此时变成 [1, 2, 3, 4]
// arr 不受影响