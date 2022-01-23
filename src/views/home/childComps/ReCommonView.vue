<template>
  <div class="recommond">
    <div v-for="item in recommends" class="recommond-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReCommonView",
  props: {
    recommends: {
      type: Array,
      default() {
        return null
      }
    }
  }
}
</script>

<style scoped>
.recommond{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom:8px solid #eee;
}

.recommond-item{
  flex: 1;
}

.recommond-item img{
  width: 70px;
  height: 70px;
}
</style>
