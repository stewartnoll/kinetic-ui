import Vue from 'vue'
import Vuex from 'vuex'
import {CREATE_TODO_ITEM, DELETE_TODO_ITEM} from './MutationTypes'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0,
      items: [
        {
          id: 1,
          text: 'Clean home',
          complete: false
        },
        {
          id: 2,
          text: 'Pay utility bill',
          complete: false
        },
        {
          id: 3,
          text: 'Finish Homework',
          complete: true
        }
      ]
    },
    mutations: {
      [CREATE_TODO_ITEM] (state, item) {
        state.items.push(item);
      },
      [DELETE_TODO_ITEM] (state, itemId) {
        state.items.splice(state.items.findIndex(i => i.id === itemId), 1);
      }
    }
  });

export default store;