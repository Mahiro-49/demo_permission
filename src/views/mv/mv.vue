<template>
  <div class="mv">
      <div class="row contain">
          <div class="col-lg-1"></div>
          <div class="col-lg-6">
              <div class="title">Mv详情</div>
             <div class="video"> <video :src="item.url"  controls ></video></div>
             <div class="mvDetail">
                 <span><img :src="mvDetail.cover" alt=""></span>
                 <span class="name">{{mvDetail.artistName}}</span>
                 <span >{{mvDetail.briefDesc}}</span>
             </div>
            <div class="time">
                <span>发布：{{mvDetail.publishTime}}</span>
                <span>播放：{{mvDetail.playCount}}</span>
            </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-4">
              <div class="title">相关mv</div>
              <mv-item :items='mvitems'></mv-item>
          </div>
      </div>
  </div>
</template>

<script>
import MvItem from 'components/commont/mvitem.vue'
export default {
    name:'Mv',
    data(){
        return {
            item:{},
            mvitems:[],
            mvDetail:[]
        }
    },
   components:{MvItem},
    activated() {
         this.getMv(this.$route.params.id)
         this.getMvMore(this.$route.params.id)
         this.getMvMessage(this.$route.params.id)
    },
    
    methods:{
        getMv(id){
            this.$request({url:`/mv/url`,params:{id}},'A')
            .then(res=>{
                
                this.item=res.data.data
            })
        },
        getMvMore(mvid){
            this.$request({url:`/simi/mv`,params:{mvid}},'A')
            .then(res=>{
              
                this.mvitems=res.data.mvs
                for(let item of this.mvitems){item.picUrl=item.cover}
            })
        },
        getMvMessage(mvid){
            this.$request({url:`/mv/detail`,params:{mvid}},'A')
            .then(res=>{
           
                this.mvDetail=res.data.data
                console.log(this.mvDetail);
            })
        }
    },
    mounted(){
        this.$bus.$on('checkMv',()=>{this.getMv(this.$route.params.id);this.getMvMore(this.$route.params.id)})
    }
}
</script>

<style >
.mv{
    overflow: auto;
}
.mv .contain{

    height: 100%;
    margin: 2rem auto;
}
.mv .title{
    font-size: 20px;
    font-weight: 700;
}
.mv .video {
    margin-top: 2rem;
    width: 60rem;
    height: 30rem;
}
.mv .video video {
    width: 100%;
    height: 100%;
    object-fit: fill
}
.mv .item div {
  display: inline-block;
  width: 80%;
  height: 20rem;
  text-align: center;
  margin: 1rem 0;
}
.mv .mvDetail {
    height: auto;
    margin-top: 2rem;
}
.mv .mvDetail img{
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
}
.mv .mvDetail .name{
    font-size: 20px;
    margin-left: 1rem;
    margin-right: 1rem;
}
.mv  .time {
    margin-top: 2rem;
}
.mv  .time span {
    margin: 0 1rem;
    color: #999;
}
</style>