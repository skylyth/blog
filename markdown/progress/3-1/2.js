function getOuter(){
    var date = '815';
    function getDate(str){
        console.log(str + date);  //访问外部的date
    }
    return getDate;     //外部函数返回
}
var today = getOuter();
today('今天是：');   //"今天是：815"
today('明天不是：');   //"明天不是：815"