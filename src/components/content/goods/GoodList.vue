<template>
<div class="goods">
<good-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></good-list-item>
</div>
</template>

<script>
import GoodListItem from "@/components/content/goods/GoodListItem";
export default {
  name: "GoodList",
  components: {GoodListItem},
  props:{
    goods:{
      type:Array,
      default(){
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
