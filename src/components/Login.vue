<template>
  <div>login</div>
</template>

<script>
import {mapActions,mapMutations,mapState,mapGetters} from "vuex";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    ...mapActions({login:"loginAction"}),
  },
  created(){
    this.login()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
