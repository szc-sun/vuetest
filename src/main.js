// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueAxios from "vue-axios";
import Axios from "axios";

import App from "./App";
import store from "./store";
import router from "./router";
import "vue2-animate/dist/vue2-animate";


//Vue.prototype.$http = axios;
Vue.use(VueAxios,Axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
})
