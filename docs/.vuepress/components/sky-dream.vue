<template>
  <div class="container">
    <div class="item">
        <span>栉风沐雨</span>
        <span>砥砺前行</span>
        <img src="/bb.jpg" alt="">
    </div>
    <div class="item">
        <span>往事不谏</span>
        <span>来日可期</span>
        <img src="/dream.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "SkyDream"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.container {
  position: fixed;
  right: 100px;
  top: 120px;
  width: 150px;
  .item {
    text-align: center;
    font-family: Roboto, Lato, sans-serif;
    margin-bottom: 30px;
    height: 220px;
    span {
      display: block;
      color: #333;
      font-family: KaiTi;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
    }
    img{
      width: 150px;
      height: 150px;
      margin-top: 6px;
    }
  }
}
</style>
