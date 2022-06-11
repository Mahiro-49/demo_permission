<template>
  <div class="search">
     <header class="title">
         <span class="titleName">{{music_name}}</span>
         <span class="end">找到{{alls.length}}条结果</span>
     </header>
     
    <el-tabs v-model="activeName" class="table">
    <el-tab-pane label="歌曲" name="1">
        <div v-if="activeName=='1'" class="contain">
                <el-table
                :data="filters"
                style="width: 100%"
                class="table">
                <el-table-column align="center" type="index" width="90">
                    </el-table-column>
               
                <el-table-column
                label="歌名"
                width="210">
                <template slot-scope="scope">
                    <span>{{ scope.row.name }}</span>
                    <span class="bofan" @click='bofan(scope.row.id)'><i class="el-icon-video-play"></i></span>
                    <span class="bofan" v-if='isshow(scope.row.mvid)' @click='toMv(scope.row.mvid)'><i class="el-icon-video-camera"></i></span>
                </template>
                </el-table-column>
                <el-table-column label="歌手"  width="150">
                <template slot-scope='scope'>
                    <span>
                    {{scope.row.artists[0].name}}
                    </span>
                </template>
                </el-table-column>
                <el-table-column label="专辑"  width="250">
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
    </el-tab-pane>
    <el-tab-pane label="歌单" name="1000" >
    <play-list :alls='alls' v-if="activeName=='1000'" ></play-list>
    </el-tab-pane>
    <el-tab-pane label="MV" name="1004">
        <mv-item  :items='alls' v-if="activeName=='1004'" class="mv1"></mv-item>
    </el-tab-pane>
     
    </el-tabs>
  <footer class="page">
        <page :pages='pages' @handleSizeChange='handleSizeChange' 
  @handleCurrentChange='handleCurrentChange' ></page>
    </footer>


   
  </div>
</template>

<script>
import {HandlePage} from 'assets/js/handlePage.js'
import {getMixins,getMv} from 'assets/js/getmusic/music.js'
import MvItem from 'components/commont/mvitem'
import Page from 'components/commont/page.vue'
import PlayList from './searchChild/palyList.vue'
export default {
    name:'Search',
    components:{Page,PlayList,MvItem},
    mixins:[HandlePage,getMixins,getMv],
    data(){
       return {
            music_name:'',
            activeName:'1',
            
       }
    },
    watch: {
        activeName(value){
             if(value=='1000')this.get_playlist(this.music_name,value)
             else if (value=='1')this.get_music(this.music_name)
             else this.get_mv(this.music_name,value)
        }
    },
    activated(){
        this.get_name()
        this.get_music(this.music_name)
    },
    methods:{
        get_name(){
            this.music_name=this.$route.params.name
        },
        get_playlist(word,value){
                this.$request({url:'/search',params:{keywords:`${this.music_name}`,type:`${value}`}},'A')
            .then(res=>{
              
                this.alls=res.data.result.playlists;
                for(let item of this.alls){item.picUrl=item.coverImgUrl}
                this.pages.total=this.alls.length;
                this.handlePage();
            })
        },
        get_music(word){
            this.$request({url:'/search',params:{keywords:`${word}`}},'A')
            .then(res=>{
              
                this.alls=res.data.result.songs;
                this.pages.total=this.alls.length;
                this.handlePage();
            })
        },
        get_mv(word,value){
            
            this.$request({url:'/search',params:{keywords:`${this.music_name}`,type:`${value}`}},'A')
            .then(res=>{
              
                this.alls=res.data.result.mvs;
                for(let item of this.alls){item.picUrl=item.cover}
                this.pages.total=this.alls.length;
                this.handlePage();
            })
        },
        goMv(){},
        
        
    },
    mounted(){
        this.$bus.$on('search',()=>{
           
            this.get_name()
            this.get_music(this.music_name)
        })
    },
    computed:{
        isshow(){
            return function(id){
                return id?true:false
            }
        }
    }
    
}
</script>

<style scoped>
.search {
    
    overflow: auto;
}
.search .title {
    padding-left: 13rem;
  
}
.search .title .titleName {
      font-size: 4rem;
    font-weight: 700;
    
}
.search .title .end {
    display: inline-block;
    margin-left: 1rem;
    color: #999;
}
.search .table{
    width: 80%;
    margin: 2rem auto 0;
   
}
.search .page {
     text-align: end;

  margin: 2rem 22.5rem 2rem 0;
}
.search .contain{
   
  
    height: 32rem;
    overflow: auto;
}
.search .contain .table {
    width: 100%;
  margin: 0 auto;

    border-color: #fff!important;

}
.search .bofan{
   margin-left:1rem;
   cursor: pointer;
}

.search .mv1{
    width: 90%;
}
</style>