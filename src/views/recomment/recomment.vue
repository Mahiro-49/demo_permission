<template>

    <div class="recomment">
      <header class="top_card">
        <div class="row ceng1" >
        <div class="col-lg-2 img" >
        <img :src='recomment.coverImgUrl'  alt="">
        </div>
        <div  class="col-lg-10 ceng1"> <div class="title">精品歌单</div>
        <div class="title1">{{recomment.copywriter}}</div>
        <div class="info">{{recomment.description}} </div>
        </div>
        </div>
      </header>
     
     <!-- <div class="row nav">
       <aside class="navnav col-lg-10"><ul>
          <li :class='{active:isactive(index)}' @click='liclick(item,index)' v-for="(item,index) in items" :key='index'>
             {{item}}  </li>  </ul></aside>
      </div>
        -->
        <navv :items='items' @cur='cur'></navv>
      <article class="itemBoss">
      <div class="row justify-content-md-center box">
      <div class="col-lg-10 items" > <music-item :items='music'></music-item>
        </div> </div>
      </article>
      <div class="block">
       <el-pagination class="page"  @size-change="handleSizeChange" @current-change="handleCurrentChange"
       :current-page="pages.currentPage"   :page-sizes="pages.page_sizes" :page-size="pages.pagesize"
          layout="total, sizes, prev, pager, next, jumper" :total="pages.total">
   </el-pagination>
      </div>
     </div>
</template>
    
  


<script>
import Navv from 'components/commont/nav.vue'
import MusicItem from 'components/commont/musicitem.vue'
import {pageMixins} from 'assets/js/page.js'

export default {
    name:'Recomment',
    mixins:[pageMixins],
    data(){
      return {
        recomment:{},
        currentindex:0,
        items:['全部','欧美','华语','流行','说唱','摇滚']
      }
    },
    components:{
      MusicItem ,Navv
    },
    created(){
      this.getbetter('全部')
      this.getmusic('全部')
    },
    methods:{
      getbetter(item){
        this.$request({url:'https://autumnfish.cn/top/playlist/highquality',method:'get',params:{limit:1,cat:`${item}`}},'A')
        .then(res=>{
         this.recomment=res.data.playlists[0]
        })
      },
      getmusic(item){
        this.$request({url:'/top/playlist',params:{cat:`${item}`,method:'get'}},'A')
        .then(res=>{
          console.log(res.data);
          this.allmusic=res.data.playlists;
          for(var item of this.allmusic){item.picUrl=item.coverImgUrl}
          //重新设置分页
          this.handlepage()
        })
      },
      cur(item){
      
         this.getmusic(item)
        this.getbetter(item)
        },

    //   //切换歌单
    //   liclick(item,index){
    //     this.currentindex=index
    //     this.getmusic(item)
    //     this.getbetter(item)
    //   },  
    // },
    // computed:{
    //   isactive(){
    //     return function(index){
    //       return this.currentindex===index
    //     }
    //   }
    // }
}
}
</script>

<style >

.recomment {
   position: fixed;
    top: 10rem;
    left: 20rem;
    bottom: 3rem;
    right: 0rem;




}

.recomment .top_card{
  width: 94rem;
  height: 13rem;
 margin: 2rem 0 0rem 13rem;
  background-color: rgba(41, 7, 7, 0.473);

}
.recomment .ceng1{
  height: 93%!important;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recomment .info {
  overflow: hidden;
}
.recomment .img {
  height: 100%;
  margin-top: 5px;
  padding-left: 40px;
}
.recomment .img img{
  width: 101px;
  height: 111px;
  
}
.recomment .title{

  width: 10rem;
  margin-top: 13px;
  padding: 5px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  border: solid 1px rgb(194, 144, 8);
  border-radius: 7%;
}
.recomment .title1 {
  color: #fff;
  font-size: 18px;
}
.recomment  .info {
  color: #eee;
}
.recomment .box {
  width: 100%;

}
.recomment .itemBoss {
  width: 100%;
 
  
  }
  .recomment .itemBoss .items {
   
    height:35rem!important;
    overflow: auto;
  }




.recomment .page {
  text-align: end;
  margin-top: 2rem;
  margin-right: 12rem;
}
</style>