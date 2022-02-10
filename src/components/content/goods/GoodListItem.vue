<template>
  <div class="GoodListItem">
    <div v-for="item in goodsItem" class="item">
      <a :href="item.link">
        <img :src="item.image">
      </a>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Array,
      default() {
        return null
      }
    }
  }
}
</script>

<style scoped>
.item{

padding: 5px;
  margin: 5px;
}

.item img{
  width: 100%;
  display: block;

}


</style>
