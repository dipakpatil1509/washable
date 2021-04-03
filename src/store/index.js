import { createStore } from 'vuex'

export default createStore({
  state: {
    user:null,
    userType:0, //0 -> User , 1 -> Provider
  },
  mutations: {
  },
  getters:{
    getUser: state=>{
      return state.user;
    },
    getUserType: state=>{
      return state.userType;
    },
  },
  actions: {
  },
  modules: {
  }
})
