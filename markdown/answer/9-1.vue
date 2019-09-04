// sky-message.vue

<template>
  <div class="message">
    <div class="message-container" v-for='item in messages' :key="item.id">
      <div class="message-content">
          {{item.content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      messages:[],
    }
  },
  created(){
    this.id = 0
  },
  methods:{
    add(option){
      // 新增消息
      const id = 'id_'+(this.id++)
      const _message = {...option, id:id}
      this.messages.push(_message)
      // iview里的提示框可以连续点击，不是点击了下一个上一个就实时关闭，所以需要延时
      const duration = option.duration
      setTimeout(()=>{
        this.del(id)
      },duration*1000)
    },
    del(id){
      // 删除消息
      for(let i=0;i<this.messages.length;i++){
        if(this.messages[i].id==id){
          this.messages.splice(i,1)
          break
        }
      }
    }
  }
}
</script>

<style>
</style>