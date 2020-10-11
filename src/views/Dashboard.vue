<template>
  <!--仪表盘-->
  <div id="sp-dashboard">
    <div id="nav">
      <router-link to="/">登录</router-link>
      <router-link to="/dashboard/">仪表盘首页</router-link>
    </div>
    <h1>This is dashboard page</h1>
    <router-view name="dash"/>
  </div>
</template>
<script>
export default {
  name: "Dashboard"
}
</script>

<style scoped>

</style>