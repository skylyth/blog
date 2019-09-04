function getOuter(){
    var date = '815';
    function getDate(str){
        console.log(str + date);  //访问外部的date
    }
    return getDate('今天是：'); //"今天是：815"
    }
getOuter();