<template>
  <div class="index">
        <nav-bar>
        <div slot="left" class="left"><i  class="logo el-icon-service"></i> </div>
        <div slot="center" class="center"> 
          <el-input  placeholder="请输入内容"   class="input"  prefix-icon="el-icon-search"
          @keyup.enter.native="replace1"  v-model="search"> </el-input>
          </div>
        <div slot="right"> 
          <el-button type="primary" size="mini" @click="login">登录</el-button>
        
        </div>
      </nav-bar>
      <song-nav></song-nav>
        <bo-fan v-show="isshow" :url='url' class="indexBofan"></bo-fan>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import BoFan from 'components/commont/bofan.vue'
import NavBar from 'components/commont/navbar.vue'
import SongNav from 'components/commont/songnav.vue'
export default {
  name:"App",
  data(){
   return {
      search:'',
      url:''
   }
   
  },
  components:{
    NavBar,
    SongNav,BoFan
  },
   methods:{
    replace1(){
      
     if(this.search.trim()) {
       this.$router.push(`/index/search/${this.search}`)
       //this.$router.push({path:'/search',query:{name:this.search})
       //在那边只需要this.$route.query.name即可获取
       this.$bus.$emit('search')
     }
     else {this.$message({type:'warning',message:'请输入内容'})}
    },
    login(){
      this.$router.push('/login')
    }
  },
  computed: {
    isshow(){
      return !(this.$route.path.includes('/recomment') || this.$route.path.includes('/newmv'))
    }
  },
}
</script>

<style>
@import url('~assets/css/normal.css');
@import url('~assets/css/normalize.css');



#app .center .input {
  
  width: 60rem;
  height: 3rem;
  outline: none;
  padding-bottom: 8rem;
  margin-left: 11rem;
}
#app .left {
  line-height: 10rem;
}
#app .logo {
 
  margin-left: 60px;
  font-size: 50px;
}
#app .right {
   
    padding-bottom: 3rem;
    padding-left: 30rem;
}
#app .el-input__prefix{
  top: -1.5rem!important;
}
#app .newmv {
    position: fixed;
    top: 10rem;
    left: 20rem;
    bottom: 0rem;
    right: 0;
    overflow: auto;
}
#app .songnav {
    position: fixed;
    top: 8rem;
    bottom: 0;
    left: 0;
      width:20rem;

    background-color: #EDEDED;
}
#app .search,#app .list,#app .mv,#app .like {
     position: fixed;
    top: 10rem;
    left: 20rem;
    bottom: 0rem;
    right: 0;
}

#app .indexBofan {
  z-index: 9;
}

</style>