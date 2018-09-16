<template>
  <div id="app">
    <mz-header :isShow="isShow" @abc="show"></mz-header>
    <mz-menu :isShow="isShow" @abc="show"></mz-menu>

    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Menu from "@/components/Menu";
export default {
  name: 'App',
  data(){
    return{
      isShow:false,
    }
  },
  methods:{
    show(data){
      this.isShow = data;
    }
  },
  components:{
    [Header.name]:Header,
    [Menu.name]:Menu
  }
}
</script>

<style>
*{margin:0;padding:0;list-style:none;box-sizing:border-box;}
html,body{width:100%;}
a{text-decoration:none;font-size:12px;color:#000;}
.fl{float: left;}
.fr{float: right;}
#app {
  width:375px; height: 100%; overflow: hidden; background: #ccc; margin: 0 auto;
}
</style>
