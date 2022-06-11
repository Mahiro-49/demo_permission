<template>
  <div class="newitem">
    <div
      v-for="(item, index) in newitems"
      :key="index"
      class="itemimg"
      @mouseover="mouseover(index)"
      @click='bofan(item.id)'
    >
      
      <img :src="item.picUrl" alt="" />
      <span class="icon" v-if="isshow(index)">
        <i class="el-icon-video-play"></i
      ></span>
    <div class="info">
        <header class="title">{{item.name}}</header>
        <section class=" title  name">{{item.song.artists[0].name}}</section>

    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewItem",
  data() {
    return {
      isindex: "",
    };
  },
  props: {
    newitems: {
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
    bofan(iid){
      this.$request({url:'/song/url',params:{id:iid},method:'get'},'A')
      .then(res=>{
      
        this.$emit('bofan',res.data.data[0].url)
      })
    }
  },
  computed: {
    isshow() {
      return function (index) {
        return this.isindex === index;
      };
    },
  },
};
</script>

<style scoped>

.newitem {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
   margin-left: 5rem;
}
.newitem>div {
  flex: 50%;
  height: 20rem;
    
  margin: 1rem 0;
 
}
.newitem div img {
 
  width:30%;
  height: 90%;
  vertical-align: bottom;
}
.newitem .itemimg {
  position: relative;
}
.newitem .itemimg .info{
    display: inline-block;
}
.newitem .icon {
  position: absolute;
  bottom: 39%;
  left: 11%;
  font-size: 36px;
  color: rgb(245, 77, 77);
}
.info .title {
    color: rgb(196, 78, 186);
}
.info .name {
    color: rgb(59, 57, 167);
}

</style>
