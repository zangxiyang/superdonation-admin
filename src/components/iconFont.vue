<template>
  <svg class="icon default" aria-hidden="true" :style="{ fontSize:size+'px' }">
    <use :xlink:href="'#'+icon"></use>
  </svg>
</template>

<script>
export default {
  name: "iconFont",
  props: {
    icon: String,
    size: {
      type: Number,
      default: 20
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.icon.default {
  margin: 0 5px;
}
</style>