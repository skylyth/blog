// sky-message.js

import Message from './sky-message.vue'
import Vue from 'vue'

// 手动创建Message组件，加载到body里，不受付组件影响

Message.$newMessage = props=>{
  const Instance = new Vue({
    data(){
      return props || {}
    },
    render(h){
      // h就是类似react李的createElement
      return h(Message,{
        props
      })
    }
  })
  const comp = Instance.$mount() //渲染
  console.log(comp)
  // 挂载在body之上 而不是组w件内部
  document.body.appendChild(comp.$el)
  // message还是vue的实例 并不是dom
  const message = Instance.$children[0]

  // message的实例
  return {
    add(optipns){
        message.add(optipns)
    },
    del(id){
        message.del(id)
    }
  }
}

let msgInstance 

function getInstance(){ //做个缓存，不用每次都创建
  msgInstance = msgInstance || Message.$newMessage()
  return msgInstance 
}
function Toast({duration=2, content=""}){
  let ins = getInstance()
  ins.add({
    content,
    duration
  })
}
export default {
  Toast
}

//写到这里在main.js里面把这个方法绑定到vue的原型对象上就可以
// Vue.prototype.$Message = Message
// this.$Message.Toast({
//     duration:5,
//     content:'你追我',
// })
// 这样全局调用了因为就两三行就不重新建文件写了