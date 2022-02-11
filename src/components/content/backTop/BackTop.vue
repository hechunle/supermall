<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    backClick() {
      // console.log('BackTop backClick ')
      // this.$emit('backClick')
    }
  }
}
</script>

<style scoped>
.backTop {
  position: fixed;
  right: 8px;
  bottom: 55px;
}

.backTop img {
  width: 43px;
  height: 43px;
}
</style>
