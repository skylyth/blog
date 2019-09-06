// 龙诺萱
var a = "abc";
var b = {
  0: "d"
};
Object.assign(a, b); 
// TypeError: Cannot assign to read only property '0' of object '[object String]'