function updateCount(){
    var count = 0;
    function getCount(val){
      count = val;
      console.log(count);
    }
    return getCount;     //外部函数返回
  }
var count = updateCount();
count(815); //815
count(816); //816