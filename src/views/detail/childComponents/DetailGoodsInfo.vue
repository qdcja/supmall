<template>
  <div class="goods-info">
    <div class="info-desc">
      {{ detailInfo.desc }}
    </div>
    <div class="info-key">
      {{ detailInfo.detailImage[0].key }}
    </div>
    <div class="info-list">
      <img
        v-for="item in detailInfo.detailImage[0].list"
        :src="item"
        alt=""
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "DetailGoodsInfo",
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.info-list img {
  width: 100%;
}
</style>
