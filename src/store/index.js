import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/Api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apikey:'faf7e5bb',
    listMovie : [],
    detailMovie : {}
  },
  mutations: {
    SET_LIST_MOVIE(state, data){
      state.listMovie = state.listMovie.concat(data);
    },
    CLEAR_LIST_MOVIE(state){
      state.listMovie = []
    },
    SET_DETAIL_MOVIE(state, data){
      state.detailMovie = data
    }
  },
  actions: {
    getListMovie({ commit, state }, params){
      return new Promise((resolve, reject) =>{
        Api().get('?Apikey='+state.apikey+'&'+params)
        .then(response => {
          if(response.data.Response == "True"){
            commit("SET_LIST_MOVIE", response.data.Search);
            resolve(response);
          }
        })
        .catch(error => {
          console.log(error.response);
          reject(error);
        });
      })
    },
    getDetailMovie({ commit, state }, id){
      return new Promise((resolve, reject) =>{
        Api().get('?Apikey='+state.apikey+'&i='+id)
        .then(response => {
          console.log(response.data)
          commit("SET_DETAIL_MOVIE", response.data);
          resolve(response);
        })
        .catch(error => {
          console.log(error.response);
          reject(error);
        });
      })
    }
  },
  modules: {
  }
})
