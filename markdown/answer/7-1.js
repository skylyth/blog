//调用
$.dialog({
    title:'你追我',
    content: '不追',
    yesFn: function(){
        alert('确定')
    },
    noFn: function(){
        alert('取消')
    }
})