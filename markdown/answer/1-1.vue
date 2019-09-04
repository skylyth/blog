<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  name: "Skyform",
  props:{
    model:{
      type:Object
    },
    rules:{
      type:Object
    },
  }
};
</script>

<style>
</style>
