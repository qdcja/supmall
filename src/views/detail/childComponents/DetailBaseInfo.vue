<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.columns[2]}}</span>
    </div>
    
  </div>
</template>

<script>
	export default {
		name: "DetailBaseInfo",
    props: {
		  goods: {
        type: Object,
        default(){
          return {}
        }
      }
    }
	}
</script>

<style scoped>
  .base-info{
    margin:10px 8px 0;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
  }
  .info-title{
    color: black;
  }
  .info-price{
    padding: 10px 0
  }
  .n-price{
    color: #ff6767;
    font-size: 20px;
  }
  .o-price{
    color: #b5b5b5;
    text-decoration: line-through;
    font-size: 14px;
    margin-left: 5px
  }
  .discount{
    background-color: #ff6eb4;
    padding: 2px 4px;
    border-radius: 10px;
    font-size: 12px;
    color: #f5f5f5;
    margin-left: 5px;

    /* 让元素上浮 */
    position: relative;
    top: -10px
  }
  .info-other{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #7a7a7a;
    padding: 8px 0;
  }
</style>
