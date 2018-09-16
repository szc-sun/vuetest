<template>
  <div class="mz-home">
    <!-- 轮播 https://m.maizuo.com/v4/api/billboard/home?__t=1533018029083-->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in arr" :key="item.id">
              <img :src="item.imageUrl" />
            </div> 
        </div> 
    </div>
     <!-- 正在热映 https://m.maizuo.com/v4/api/film/now-playing?__t=1533018029103&page=1&count=5 -->
    <ul class="film">
        <li v-for="item in nowPlaying" :key="item.id">
          <img :src="item.cover.origin">
        </li>
    </ul>
    <hr/>
    <!-- 即将上映 https://m.maizuo.com/v4/api/film/coming-soon?__t=1533018029121&page=1&count=3 -->
     <ul class="film">
        <li v-for="item in comingSoon" :key="item.id">
          <img :src="item.cover.origin">
        </li>
    </ul>
  </div>
  

</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper";
export default {
  name: 'mz-home',
  data () {
    return {
     arr:[],
     nowPlaying:[],
     comingSoon:[],

    }
  },
  methods:{},
  created(){
    let url = "http://localhost:9000/mz/v4/api/billboard/home";
    this.$http.get(url,{params:{__t:Date.now()}}).then(res=>{
      console.log(1111,res.data);
      this.arr = res.data.data.billboards;
    });
    let params = {__t:Date.now(),page:1,count:5};
    let nowPlayingUrl = "http://localhost:9000/mz/v4/api/film/now-playing";
    this.$http.get(nowPlayingUrl,{params}).then(res=>{
      console.log("nowPlaying",res.data.data.films);
        this.nowPlaying = res.data.data.films;
    }); ;
    let comingSoonUrl = "http://localhost:9000/mz/v4/api/film/coming-soon";
    this.$http.get(comingSoonUrl,{params}).then(res=>{
      console.log("comingSoon",res.data.data.films);
        this.comingSoon = res.data.data.films;
    });
  },
  updated(){
    console.log(222,this.arr);
    new Swiper (".swiper-container",{loop: true});        

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mz-home{padding-top:50px;}
.swiper-container {width: 375px;height: 210px;}
.swiper-container img{width: 100%;height: 100%;}
.film{padding:17px;padding-top: 18px;}
.film li{height:240px; background: yellow;margin-bottom:17px;}
.film li img{width: 100%;height: 100%;} 
</style>
