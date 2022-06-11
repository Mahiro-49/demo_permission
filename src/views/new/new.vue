<template>
  <div class="new">
      <navv :items='items' @cur='cur'></navv>
<div class="contain">
       <el-table
    :data="filters"
    style="width: 80%"
    class="table">
     <el-table-column align="center" type="index" width="50">
      
        </el-table-column>
    <el-table-column
      align="left"
      width="180">
     <template slot-scope="scope">
        <i @mousemove="mouover(scope.row.id,'add')" class="el-icon-moon" 
        :class="{ likeAdd:true,active:isactive(scope.row.id,'add')}"
        @click='toAdd(scope.row)'>
        </i>
       <span><img :src="scope.row.album.picUrl" alt="" class="img"></span>
       <i  @mousemove="mouover(scope.row.id,'play')" @click='bofan(scope.row.id)' 
       class="el-icon-video-play icon" :class="{ active:isactive(scope.row.id,'play')}">
       </i>
       <i  @mousemove="mouover(scope.row.id,'mv')" @click='toMv(scope.row.mvid)' 
       v-show='isshow(scope.row)' class="el-icon-video-camera-solid icon1" 
       :class="{active:isactive(scope.row.id,'mv')}">
       </i>
     </template>
    </el-table-column>
    <el-table-column
      label="音乐标题"
      width="180">  
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
         
      </template>
    </el-table-column>
    <el-table-column label="歌手">
      <template slot-scope='scope'>
        <span>
          {{scope.row.artists[0].name}}
        </span>
       
      </template>
    </el-table-column>
       <el-table-column label="专辑">
     <template slot-scope="scope">
       <span>{{scope.row.album.name}}</span>
     </template>
    </el-table-column>
          <el-table-column label="时长">
     <template slot-scope="scope">
       <span >{{getdate(scope.row.duration)}}</span>
     </template>
    </el-table-column>
  </el-table>
   </div>
  <page class="page" :pages='pages' @handleSizeChange='handleSizeChange' 
  @handleCurrentChange='handleCurrentChange'></page>
  </div>
</template>

<script>
import {HandlePage} from 'assets/js/handlePage.js'
import {getMixins,getMv} from 'assets/js/getmusic/music.js'
import Navv from 'components/commont/nav.vue'
import Page from 'components/commont/page.vue'
export default {
    name:'New',
    components:{
       Navv,Page
    },
    mixins:[HandlePage,getMixins,getMv],
    data(){
      return {
          musicLike:{},
          currentId:'',
         url:'',
         items:['全部','华语','欧美','日本'],
      }
    },
    created(){
      this.getmusic(0)
    },
    methods:{
      //获取音乐
      getmusic(item){
        this.$request({url:'/top/song',params:{type:item,limit:20}},'A')
        .then(res=>{
        
          this.alls=res.data.data;
          this.pages.total=this.alls.length;
        
          this.handlePage()
        })
      } ,
      //监听子组件
      cur(item){
        switch(item){
          case '全部':item=0;break;
          case '华语':item=7;break;
          case '欧美':item=96;break;
          case '日本':item=8;break;
          case '韩国':item=16;break;
        }
        this.getmusic(item)
      },
      mouover(id,type){
       switch (type) {
         case 'add': this.currentId=id;break;
         case 'play':this.currentId=id+'play';break;
         case 'mv':this.currentId=id+'mv';break;
       }

      },
      isactive(id,type){
         switch (type) {
         case 'add': return this.currentId===id;break
         case 'play': return this.currentId===id+'play';break
         case 'mv': return this.currentId===id+'mv';break
      }
    
    
    },
     toAdd(row){
       this.musicLike.id=row.id;
       this.musicLike.mvid=row.mvid;
       this.musicLike.name=row.name;
       this.musicLike.artists=row.artists[0].name;
       this.musicLike.duration=row.duration;
       this.musicLike.company=row.album.company
   
       this.$store.dispatch('addLike',this.musicLike)
       this.musicLike={};
     }

    },
   computed:{
      isshow(){
        return function(row){
          return row.mvid?true:false
        }
      }
      }
}
</script>

<style scoped>
.new {
    position: fixed;
    top: 10rem;
    left: 20rem;
    bottom: 0rem;
    right: 0;
    overflow: auto;
}
.new .contain{
    margin-top: 2rem ;
    height: 38rem;
    overflow: auto;
}
.new .table {
  margin: 0 auto;

    border-color: #fff!important;

}
.new .table th,td{
   border: 0!important;
    border-color: #fff!important;
}
.new .img {
  width: 4rem;
  height: 4rem;
}

.new .icon {
  font-size: 18px;
  margin-left: 2rem;
  cursor: pointer;
}
.new .icon1 {
  font-size: 18px;
   margin-left: 1rem;
   cursor: pointer;
}
.new .page{
  text-align: end;
  margin-top: 4rem;
  margin-right: 12rem;
}
.new .likeAdd{
  margin-right: 1rem;
  cursor: pointer;
}
.new .active{
  color: red;
}
</style>