<template>
  <div class="swiper">
      <el-carousel
      :interval="4000"
      type="card"
      height="200px"
      loop
      autoplay
      class="lbtboss"
    >
      <el-carousel-item v-for="(item, index) in banner" :key="index">
        <img class="lbt" :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    name:'Swiper',
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.swiper .lbtboss {
  margin-left: 2rem;
  width: 100rem;
  height: 30rem;
 
}
.swiper .lbt {
  width: 100%;
  height: 100%;
}
</style>