<template>
  <div class="">
    <!-- 导航栏 -->
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="backImg">
      </div>
      <div slot="center" class="title">
        <div 
          v-for="(item,index) in titles" 
          class="title-item"
          @click="itemClick(index)"
          :class="{active:currentIndex==index}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script type="text/javascript">

import NavBar from  'components/common/navbar/NavBar'
export default {
  name:  'detailNavBar',
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components: {
    NavBar
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style  scoped>
  .title{
    display: flex;
    text-align: center;
    font-size: 12px
  }
  .title-item{
    flex: 1 
  }
  .active{
    color: red
  }
  .backImg{
    height: 12px;
    width: 12px;
    line-height: 12px;
    padding-top: 2px
  }
</style>
