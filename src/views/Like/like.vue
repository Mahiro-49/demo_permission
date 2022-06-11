<template>
  <div class="like">
    <div class="contain">
       <el-table
    :data="items"
    style="width: 90%"
    class="table">
     <el-table-column align="center" type="index" width="100">
     </el-table-column>
    <el-table-column
      label="音乐标题"
      align="left"
      width="220">  
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
         <i   @click='bofan(scope.row.id)' 
       class="el-icon-video-play icon" >
       </i>
      </template>
    </el-table-column>
    <el-table-column label="歌手" width="200" align="center">
      <template slot-scope='scope'>
        <span>
          {{scope.row.artists}}
        </span>
       
      </template>
    </el-table-column>
       <el-table-column label="专辑" width="220" align="center">
     <template slot-scope="scope">
       <span>{{scope.row.company}}</span>
     </template>
    </el-table-column>
          <el-table-column label="时长">
     <template slot-scope="scope">
       <span >{{getdate(scope.row.duration)}}</span>
     </template>
    </el-table-column>
    <el-table-column label="操作">
     <template slot-scope="scope">
      <el-button type="danger" @click='delete11(scope.row)' size="mini">删除</el-button>
     </template>
    </el-table-column>
    
  </el-table>
   </div>
  </div>
</template>

<script>
import {HandlePage} from 'assets/js/handlePage.js'
import {getMixins,getMv} from 'assets/js/getmusic/music.js'
export default {
    name:'Like',
      mixins:[HandlePage,getMixins,getMv],
    data(){
     return {
        items:[]
     }
     
    },
    activated() {
      this.getmusic()
    },
    methods:{
      getmusic(){
        this.items=this.$store.getters.getMusic;
        console.log(this.$store.getters.getMusic);
      },
      delete11(item){
        this.$store.dispatch('addLike',item)
      }
    }
}
</script>

<style scoped>
.like .contain{
   
    height: 38rem;
    overflow: auto;
     margin-top: 2rem ;
     margin-left: 10rem;
}
.like .icon {
  font-size: 18px;
  margin-left: 1rem;
  cursor: pointer;
}
</style>