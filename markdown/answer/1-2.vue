<template>
 <div>
   <label v-if="label">{{label}}</label>
    <div>
      <slot></slot>
      <p v-if="validateStatus=='error'" class='error'>
        {{errorMessage}}
      </p>
    </div>
 </div>
</template>

<script>
export default{
  name:"SkyFormItem",
  inject:['form'],
  data(){
    return {
      validateStatus:'',
      errorMessage:''
    }
  },
  created(){
    this.$bus.$on('skyFormItem',(value)=>{
      this.validate(value)
    })
  },
  methods:{
    getRules(){
      let formRules = this.form.rules[this.prop]
      return formRules
    },
    
    validate(obj){
      if(obj.name !== this.prop){
        return 
      }
      const rule = this.getRules()
      const value = this.form.model[this.prop]
      if(Array.isArray(rule)){
        rule.forEach(v=>{
          if(v.required && !value){
            this.errorMessage = v.message
            this.validateStatus = 'error'
          }
          if(v.maxLength && value.length>v.maxLength){
            this.errorMessage = v.message
            this.validateStatus = 'error'
          }
        })
      }else{
        if(rule.required && !value){
        this.errorMessage = rule.message
        this.validateStatus = 'error'
        }else{
          this.validateStatus = 'validating'
        }
      }
    }
  },
  props:{
    label:{
      type:String,
    },
    prop:{
      type:String
    }
  }
}
</script>

<style>
p.error{
  color:red;
}
</style>
