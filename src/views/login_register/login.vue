<template>
  <div class="login" > 
  <header>登录</header>
  <div class="container">
   <form class="from" ref="from">
     <div class="form-group">
       <label>用户名</label>
       <input v-model="user.username" type="username" class="form-control" id="exampleInputusername1">
     </div>
     <div class="form-group">
       <label>密码</label>
       <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1">
     </div>
   </form>
   <el-button @click="submit1" type="primary" size="mini">登录</el-button>
   <el-button type="success" @click="dialogFormVisible = true" size="mini">注册</el-button>
  </div>


<!-- <el-dialog title="注册" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="用户名" :label-width="formLabelWidth">
       <el-input v-model="form.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
       <el-input v-model="form.password" autocomplete="off" type='password'></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="register">确 定</el-button>
  </div>
</el-dialog> -->
  </div>


</template>

<script>
import axios from 'axios'
import store from '../../store'
import router from '../../router'

export default {
    name:'Login',
  data(){
    return {
      user:{
        username:'admin',
        password:'123456'
      },
        dialogFormVisible: false,
        form: {
          username:'',
          password:''
        },
        formLabelWidth: '120px'
      };
    },
    mounted() {
      axios.get('/mock/login').then(res =>{
        console.log(res);
      })
    },
    methods:{
      submit1() {
        axios.get('/mock/login').then(res => {
          if(res) {
            if (this.user.username == res.data[0].username && this.user.password == res.data[0].password) {
              store.commit("changeToken", res.data[0].token)
              store.commit("changeRoles", res.data[0].role)
              router.push({ path: "/" })
            }
          }
        })
      }
    //  submit1() {
        // this.$request({
        //   url:'/api/index/login',
        //   data:this.user,
        //   method:'POST'
        // },'B').then(res=>{
        //   if(res){
        //     const {token} =res.data
        //     localStorage.setItem('loginToken',token);
        //     this.$router.push('/index/home')
        //   }}).catch(err=>{
        //   if(err===404) {
        //     this.$message({type:'warning',message:'密码不正确'})
        //   } else {
        //     this.$message({type:'warning',message:'邮箱未注册'})
        //   }
        // })

        // }

    }
}
</script>

<style>
.login {
  display: flex;
  align-items: center;
  background-color: rgb(211, 211, 211);
  height: 100vh;
}
.login .container {
  width: 50rem;
  background-color: rgb(245, 247, 247);
  border: 1px solid #999;
  padding: 2rem;
  border-radius: 2%;
  margin-left: 50%;
  transform: translateX(-50%);
}
.login header {
  position: absolute;
  left: 50%;
  top: 26%;
  font-size: 20px;
  transform: translateX(-50%);
}
.login .register {
  position: relative;
  top: 54px;
  right: 82rem;
  }
</style>