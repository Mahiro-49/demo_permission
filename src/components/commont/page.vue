<template>
  <div class="Page">
      <div class="block">

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pages.current_page"
      :page-sizes="pages.page_sizes"
      :page-size="pages.page_size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pages.total">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import {pagesMixins} from 'assets/js/pages.js'
export default {
    name:'Page',
    data(){
        return {
            
        }
    },
    mixins:[pagesMixins]
  
   }
</script>

<style>

</style>