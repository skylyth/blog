<template>
  <div class="container">
    <sky-form :model="form" :rules="rules">
     <sky-form-item label="用户名" prop="name">
       <sky-input v-model="form.name" name='name'></sky-input>
     </sky-form-item>
     <sky-form-item label="年龄" prop="age">
       <sky-input v-model="form.age" name='age'></sky-input>
     </sky-form-item>
   </sky-form>
  </div>
</template>

<script>
import SkyForm from "../components/sky-form.vue";
import SkyFormItem from "../components/sky-form-item.vue";
import SkyInput from "../components/sky-input.vue";
export default {
  components: {
    SkyForm,
    SkyFormItem,
    SkyInput
  },
  data() {
    return {
      form: {
        name: "",
        age: ""
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空" },
          { maxLength: 10, message: "用户名长度要小于10" }
        ],
        age: { required: true, message: "年龄不能为空" }
      }
    };
  }
};
</script>

<style lang="less" scoped>

</style>
