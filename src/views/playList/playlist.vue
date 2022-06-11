<template>
  <div class="list">
      <section class="contain">
          <div class="row header">
            <div class="col-lg-3"><img :src="items.coverImgUrl" alt=""></div>
            <div class="col-lg-7 text">
                <div class="title">{{items.name}}</div>
          <div>{{items.description}}</div>
            </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return {
            items:[]
        }
    },
    methods:{
      
    },
    mounted(){
        this.$bus.$on('detail123',(item)=>{
            this.items=item
        })
    }
}
</script>

<style scoped>
.list .contain{
    width: 80%;
    height: 100%;
    margin: 2rem auto;
   
}
.list .contain .header{
    width: 80%;
     margin: 4rem auto;
     background-color: rgba(60, 62, 63, 0.185);
}
.list .contain  .title {
  
    font-size: 20px;
    font-weight: 700;
}
.list .contain img {
    width: 20rem;
    height: 20rem;
}
.list .text {
    margin-left: 2rem;
}
</style>