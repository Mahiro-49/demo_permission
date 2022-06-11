<template>
  <div class="home">
    <swiper :banner='banner' />
    <section class="title">推荐歌单</section>
    <music-item :items='items'></music-item>
     <section class="title1">最新歌单</section>
    
      <new-item :newitems='newitems' @bofan='bofan'></new-item>
    
  </div>
</template>

<script>
import BoFan from 'components/commont/bofan.vue'
import axios from 'axios'
import qs from 'qs'
import Swiper from 'components/commont/swiper'
import MusicItem from 'components/commont/musicitem'
import NewItem from 'components/commont/newitem'
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      items:[],
      newitems:[],
      url:''
    };
  },
  components:{
     Swiper,MusicItem,NewItem,BoFan
 
  },
  created() {
  
    this.getbanners()
    this.getrecomment()
    this.getnew()
  },
  mounted() {
  },

  methods:{
    getbanners(){
      this.$request({url:`/banner/`,method:'get'},'A')
      .then((result) => {
        this.banner = result.data.banners;
      })
      .catch((err) => {
        console.log(res);
      });},
    getrecomment(){
      this.$request({url:`/personalized`,params:{limit:12},mehtod:'get'},'A')
      .then(res=>{
        
        this.items=res.data.result
      })
    },
    getnew(){
       this.$request({url:`/personalized/newsong`,mehtod:'get'},'A')
      .then(res=>{
        this.newitems=res.data.result
      
      })
    },
    bofan(url){
     
      this.$parent.url=url
      
    }
  }
};
</script>

<style>
.home {
  position: fixed;
  top: 10rem;
  left: 30rem;
  bottom: 5rem;
  right:0rem;

   overflow: auto;
   padding-right: 10rem;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.home .title{
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2rem;
}
.home .title1 {
    font-size: 2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-left: 2rem;
}

</style>