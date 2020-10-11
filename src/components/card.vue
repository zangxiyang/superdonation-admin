<template>
  <div class="sp-card">
    <div class="header" v-show="header">
      <slot name="header"/>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "card",
  props:{
    header: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.sp-card {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 500px;
  width: 560px;
  background: rgba(255, 255, 255, .8);
  padding: 40px 20px;
  border-radius: 10px;
}

.sp-card .header {
  padding-bottom: 20px;
}
</style>