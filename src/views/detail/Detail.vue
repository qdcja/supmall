<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    </scroll>
  </div>
</template>

<script type="text/javascript">
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo"

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // 1.获取顶部图片轮播数据
      this.topImages = res.result.itemInfo.topImages;
      // 2.获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.services
      );
      // 3.获取店铺信息
      this.shop = new Shop(res.result.shopInfo);
      // 4.保存商品详情数据
      this.detailInfo = res.result.detailInfo;
    });
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>
