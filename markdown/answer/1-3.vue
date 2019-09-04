<template>
  <input type="text" :value='inputValue' @input='handleInput'>
</template>

<script>
export default {
  name: "SkyInput",
  props: {
    value: {
      type: String,
      default: "",
      required: true
    },
    name:{
      type:String
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.$emit("input", value);
      this.$bus.$emit("skyFormItem", {
        value,
        name: this.name
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
