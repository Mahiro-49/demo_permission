<template>
  <div class="playlist">
      <section><music-item :items='alls'></music-item></section>
  </div>
</template>

<script>

import MusicItem from 'components/commont/musicitem'
export default {
    name:'PlayList',
    components:{MusicItem},
    props:{
        alls:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>

</style>