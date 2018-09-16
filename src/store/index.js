import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        isShow:false,
        title:"",
    },
    getters:{},
    mutations:{
        showMutation(state,payload){
            state.isShow = !state.isShow;
            //console.log("payload",payload);
        },
        yingyuanMutation(state,payload){
            state.title = "全部影院";
        },
        changeMutation(state,payload){
            state.title = "卖座电影";
        },
        loginMutation(state,payload){
            state.title = "登录";
        },
        

    },
    actions:{
        showAction({commit},payload){
            commit("showMutation");
        },
        changeAction({commit},payload){
            commit("changeMutation");
        },
        yingyuanAction({commit},payload){
            commit("yingyuanMutation");
        },
        loginAction({commit},payload){
            commit("loginMutation");
        },
       

    },
    modules:{},
});
console.log(111111,store.state.title)

export default store;