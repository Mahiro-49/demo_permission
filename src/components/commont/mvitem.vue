<template>
  <div class="item">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="itemimg"
      @mouseover="mouseover(index)"
      @click='toMv(item.id)'
    >
      <span class="assets" v-if="isshow(index)">{{ item.name }}</span>
      <img :src="item.picUrl" alt="" />
      <span class="iconRight" v-if="isshow(index)">
        <i class="el-icon-video-play"></i
      ></span>
      <span v-if="isshow(index)" class="iconLeft">
        <i class="el-icon-caret-right"></i>{{item.playCount | transform}}
      </span>
    </div>
  </div>
</template>

<script>
import {getMv} from 'assets/js/getmusic/music.js'
export default {
  name: "MvItem",
  data() {
    return {
      isindex: "",
    };
  },
  mixins:[getMv],
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    mouseover(index) {
      this.isindex = index;
     
    },
   

  },
  computed: {
    isshow() {
      return function (index) {
        return this.isindex === index;
      };
    },
  },
  filters:{
    transform(Count){
      return  Count>100*1000?'10万':Count
    }
  }
};
</script>

<style scoped>

.item {
  width: 100%;
  height: auto;
  
  flex-wrap: wrap;
}
.item div {
  display: inline-block;
  width: 33%;
  height: 20rem;
  text-align: center;
  margin: 1rem 0;
}
.item div img {
  width: 90%;
  height: 100%;
  border-radius: 5%;
}
.item .itemimg {
  position: relative;
}
.item .assets {
  position: absolute;
  left: 0;
  z-index: 9;
  width: 90%;
  font-size: 16px;
  margin-left: 5%;
  color: #fff;
  background-color: rgba(10, 10, 10, 0.5);
}
.item .iconRight {
  position: absolute;
  bottom: 5px;
  right: 30px;
  font-size: 36px;
  color: rgb(245, 77, 77);
}
.item .iconLeft {
  position: absolute;
  bottom: 5px;
  left: 30px;
  font-size:20px;
  color: #fff;
}
</style>
