<template>
  <div class="shop-info">
    <div class="shop-top">
      <a href="">
        <img :src="shop.logo" alt="" class="shop-logo">
        <span class="shop-name"> {{shop.name}} </span>
      </a>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
        <div class="info-sells">
          <div class="sells-count"> {{shop.sells}} </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count"> {{shop.goodsCount}} </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right shop-middle-item">
        <table>
          <tr v-for="item in shop.score">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}"> {{item.isBetter ? '高' : '低'}} </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <a class="enter-shop">进店逛逛</a>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name:  'DetailShopInfo',
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  
}
</script>

<style  scoped>
.shop-info{
  margin: 0 8px;
}
.shop-top{
  margin: 30px 0 20px;
  /* 元素垂直中心 */
  align-items: center;
}
.shop-logo{
  width: 50px;
  height: 50px;
  border: 1px solid #cccccc;
  vertical-align: middle
}
.shop-name{
  font-size: 14px;
  margin-left: 10px
}

/* 中间区域 */
.shop-middle{
  display: flex;
  align-items: center;
  margin: 20px 0
}
.shop-middle-item{
  flex: 1
}
.shop-middle-left{
  display: flex;
  text-align: center;
  color: black;
  border-right: 1px solid #ccc;
}
.info-sells,.info-goods{
  flex: 1
}
.sells-count{
  font-size: 16px;
  height: 25px;
}
.sells-text{
  font-size: 12px;
}
.goods-count{
  font-size: 16px;
  height: 25px;
}
.goods-text{
  font-size: 12px;
  color: black
}
.shop-middle-right{
  font-size: 12px
}
.shop-middle-right table{
  margin: auto;
}
.shop-middle-right  tr{
  height: 20px ;
}
.score{
  color: green;
  padding: 0 8px
}
.better{
  color: green
}
.score-better{
  color: red
}
.better-more{
  color: red
}
.shop-bottom{
  margin-bottom: 20px;
  text-align: center;
  font-size: 14px
}
.enter-shop{
  background-color: #f1f1f1;
  padding: 8px 40px;
  border-radius: 10px;
}
</style>
