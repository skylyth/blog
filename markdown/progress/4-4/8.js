var add = function(x) {
    return function(y) {
      return x + y;
    };
  };
  
  var increment = add(1);
  var addTen = add(10);
  
  increment(2);
  // 3
  
  addTen(2);
  // 12
  
  add(1)(2);
  // 3