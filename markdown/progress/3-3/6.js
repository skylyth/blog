var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = (function (num) {
      return function(){
          console.log(num);
      }
  })(i);
}

data[0]();	// 0
data[1]();	// 1
data[2]();	// 2