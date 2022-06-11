<template>
  <div class="item">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="itemimg"
      @mouseover="mouseover(index)"
      @click='goPlayList(item,item.id)'
    >
      <span class="assets" v-if="isshow(index)">{{ item.name }}</span>
      <img :src="item.picUrl" alt="" />
      <span class="icon" v-if="isshow(index)">
        <i class="el-icon-video-play"></i
      ></span>
       <span v-if="isshow(index)" class="iconLeft">
        <span>播放量:</span>{{item.playCount | transform}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicItem",
  data() {
    return {
      isindex: "",
    };
  },
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
    goPlayList(item,id){
     this.$router.push(`/index/playlist/${id}`)
     this.$bus.$emit('detail123',item)
    }

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
  
}
.item div {
  display: inline-block;
  width: 25%;
  height: 20rem;
  text-align: center;
  margin: 1rem 0;
}
.item div img {
  width: 80%;
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
  width: 80%;
  font-size: 16px;
  margin-left: 10%;
  color: #fff;
  background-color: rgba(10, 10, 10, 0.5);
}
.item .icon {
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
  font-size:16px;
  color: #fff;
}
</style>
