import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputs: [
      {
        name: ''
      }
    ],
    age: [
      {
        from: '',
        to: ''
      }
    ]
  },
  actions: {},
  mutations: {
    add(){
      this.state.inputs.push({ name: ''})
    },
    remove(index){
      this.state.inputs.splice(index, 1)
    },
    updateAge(){
      this.state.age.push()
    }
  },
  getters: {},
  modules: {

  }
})
