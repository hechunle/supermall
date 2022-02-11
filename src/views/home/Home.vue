<template>
  <div id="home" class="wrapper" >
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <home-swiper :banners="banners"/>
      <ReCommonView :recommends="recommends"/>
      <feature-view/>
      <TabControl class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick"/>
      <good-list :goods="goods['list']"></good-list>
    </scroll>
    <back-top  @click.native="backClick"/>

  </div>
</template>
<script>
import navBar from "@/components/common/navbar/NavBar";
import {Swiper, SwiperItem} from "@/components/common/swiper";
import Scroll from "@/components/common/scroll/Scroll";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import ReCommonView from "@/views/home/childComps/ReCommonView";
import FeatureView from "@/views/home/childComps/FeatureView";

import TabControl from "@/components/content/tabControl/TabControl";

import GoodList from "@/components/content/goods/GoodList";
import BackTop from "@/components/content/backTop/BackTop";
import GoodListItem from "@/components/content/goods/GoodListItem";

import {getHomeMultidata, getHomeGoods} from "@/network/home";

export default {
  name: "Home",
  components: {
    Swiper,
    navBar,
    SwiperItem,
    HomeSwiper,
    ReCommonView,
    FeatureView,
    TabControl,
    GoodList,
    GoodListItem,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'page': 0,
        'list': []
      }
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods()
  },
  methods: {
    tabClick(index) {
      console.log(index);
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list,
          this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods() {
      const page = this.goods['page'] + 1
      getHomeGoods(page).then(res => {
        this.goods[page] += 1
        this.goods['list'].push(res.data.banner.list)
      })
    },
    backClick(){
      console.log('Home backClick')
      this.$refs.scroll.scroll.scrollTo()
    }

  }
}
</script>

<style scoped>

#home {
  padding-top: 44px;
  position: relative;
  height: 200vh;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
}

.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
