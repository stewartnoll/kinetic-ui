import Vue from 'vue'
import Vuex from 'vuex'
import {CREATE_TODO_ITEM, DELETE_TODO_ITEM} from './MutationTypes'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      nextId: 4,
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
        item.id = this.state.nextId++
        state.items.push(item)
      },
      [DELETE_TODO_ITEM] (state, itemId) {
        state.items.splice(state.items.findIndex(i => i.id === itemId), 1)
      }
    },
    actions: {
        [CREATE_TODO_ITEM] ({commit}, item) {
            commit(CREATE_TODO_ITEM, item)
            // POST to API
        },
        [DELETE_TODO_ITEM] ({commit}, itemId) {
            // const itemToDelete = state.items[state.items.findIndex(i => i.id == itemId)]
            commit(DELETE_TODO_ITEM, itemId)
            // DELET to API
        }
    }
  });

export default store;