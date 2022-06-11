<template>
    <div class="audiof">  <audio :src='url'  controls class="audio" autoplay loop></audio></div>
</template>

<script>
export default {
    name:'BoFan',
    props:{
        url:{
            type:String,
            default:''
        }
    }
}
</script>

<style>
 .audiof{
    position: fixed;
  width: 100%;
  background-color: #F1F3F4;
  bottom: 0;
  left: 0;
  right: 0;
}
 .audio{

  
  width: 100%;

  outline: none;
}
</style>