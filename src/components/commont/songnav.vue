<template>
  <aside class="songnav" >
  <el-col :span="24"  >
    <el-menu 
      class="el-menu-vertical-demo song"
      background-color=" #EDEDED"
      text-color="black"
      active-text-color="red">
      <el-menu-item index="1" @click="findMusic">
        <template slot="title">
          <i class="el-icon-service"></i>
          <span>发现音乐</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2"  @click="recommentMusic">
        <i class="el-icon-open"></i>
        <span slot="title">推荐歌单</span>
      </el-menu-item>
      <el-menu-item index="3"  @click="newMusic">
        <i class="el-icon-headset"></i>
        <span slot="title">最新音乐</span>
      </el-menu-item>
      <el-menu-item index="4"  @click="newMv">
        <i class="el-icon-video-play"></i>
        <span slot="title">最新MV</span>
      </el-menu-item>
         <el-menu-item index="5"  @click="Like">
        <i class="el-icon-video-play"></i>
        <span slot="title">我的收藏</span>
        </el-menu-item>
    </el-menu>
  </el-col>
  </aside>
</template>

<script>
export default {
    name:'SongNav',
   

    methods:{
      findMusic(){
        this.$router.push('/index/home')
      },
      recommentMusic(){
        this.$router.push('/index/recomment')
      },
      newMusic(){
        this.$router.push('/index/new')
      },
      newMv(){
        this.$router.push('/index/newmv')
      },
      Like(){
        this.$router.push('/index/like')
      }
      
    }
}
</script>

<style scoped>

.song .el-menu-item {
  font-size: 2rem!important;
  font-weight:500;
}
.songnav section {
    text-align: center;
    line-height: 5rem;
}

</style>