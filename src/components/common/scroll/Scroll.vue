<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data(){
    return{
    scroll:null,
      message:"哈哈哈"
    }
  },
  mounted() {
    this.scroll =  new BScroll(this.$refs.wrapper,{
      probeType:3,
      observeDOM:true,
      click:true
    })
     this.scroll.scrollTo(0,0)
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>

</style>
