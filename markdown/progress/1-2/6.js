var a = {n: 1};
var b = a;
a.x = a = {n: 2};

a.x 	// 这时 a.x 的值是多少
b.x 	// 这时 b.x 的值是多少