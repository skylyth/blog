var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }