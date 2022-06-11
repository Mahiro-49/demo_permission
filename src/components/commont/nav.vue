<template>
 <div class="navbar1">
      <div class="row nav">
       <aside class="navnav col-lg-10"><ul>
          <li :class='{active:isactive(index)}' @click='liclick(item,index)' 
          v-for="(item,index) in items" :key='index'>
             {{item}}  </li>  </ul></aside>
      </div>
 </div>
</template>

<script>
export default {
    name:'Navv',
    data(){
        return {
            currentindex:0
        }
        
    },
    props:{
        items:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
         //切换歌单
      liclick(item,index){
        this.currentindex=index
        this.$emit('cur',item)
      }, 
    },
      computed:{
      isactive(){
        return function(index){
          return this.currentindex===index
        }
      }
    }
}
</script>

<style>
.navbar1 .nav {
   width: auto;
    height: 4rem!important;
  margin: 1rem 0 -2rem 50rem;
}

.navbar1 .nav ul  li {
  display: inline-block;
  list-style: none;
  margin: 0 3rem;
  cursor: pointer;
}
.navbar1 .active {
  color: red;
}
</style>