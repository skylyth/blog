const throttle = (fn, wait=50)=>{
    let lastTime = 0
    return function(){
        let now = +new Date()
        if(now - lastTime > wait){
            lastTime = now
            fn.apply(this, arguments)
        }
    }
}

setInterval(throttle(()=>{
    console.log(1)
},2000),1)