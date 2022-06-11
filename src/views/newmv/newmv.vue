
<template>
  <div class="newmv">
    <header>
     <div class="type1">地区：</div> <navv class="choose " :items='area'  @cur='navv1'></navv>
     <div class="type2">类型：</div>  <navv class="choose " :items='type'  @cur='navv2'></navv>
     <div class="type3">排序：</div>  <navv class="choose " :items='order' @cur='navv3'></navv>
    </header>
    <section class="contain">
      <mv-item :items='filters'></mv-item>
    </section>
    <footer class="page">
      <page :pages='pages' @handleSizeChange='handleSizeChange' 
  @handleCurrentChange='handleCurrentChange' ></page>
    </footer>
  </div>
</template>

<script>
import {HandlePage} from 'assets/js/handlePage.js'

import Navv from 'components/commont/nav.vue'
import MvItem from 'components/commont/mvitem.vue'
import Page from 'components/commont/page.vue'
export default {
    name:'NewMv',
    components:{MvItem,Page,Navv},
    mixins:[HandlePage],
    data(){
      return {
        filters:[],
        alls:[],
       
        area:['全部','欧美','华语','流行','说唱','摇滚'],
        type:['全部','官方版','原生','现场版','网易出品'],
        order:['上升最快','最热','最新']

      }
    },
    created(){this.getMv()},
    methods:{
     getMv(area='全部',type='全部',order='全部'){
       this.$request({url:'/mv/all',params:{limit:36,area:`${area}`,type:`${type}`,order:`${order}`}},'A').then(res=>{
         this.pages.page_sizes=[9,18,27,36];
         this.pages.page_size=9;
         this.alls=res.data.data;
         for(let item of this.alls){item.picUrl=item.cover};
         this.pages.total=this.alls.length;;
           this.handlePage();
         })
     },
  

     navv1(area){
  
       this.getMv(area)
     },
       navv2(type){
     
       this.getMv(type)
     },  
     navv3(order){
      
       this.getMv(order)
     }
    }
}
</script>

<style scoped>



.newmv .contain {
  width: 80%;
 
  margin: 5rem 0 0 2rem;

}
.newmv .page{  
  text-align: end;

  margin: 2rem 22.5rem 2rem 0;
  }

.newmv .choose {
 margin-left: -49rem!important;
}  

.newmv header .type1,.newmv header .type2,.newmv header .type3{
  float: left;
  margin-left: 2rem;
}

.newmv header .type2,.newmv header .type3{
  margin-top: 1rem;
}
</style>