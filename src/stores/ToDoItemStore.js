import Vue from 'vue'
import Vuex from 'vuex'
import {CREATE_TODO_ITEM, 
  DELETE_TODO_ITEM,
  CHECK_TODO_ITEM,
  UNCHECK_TODO_ITEM} from './ActionTypes'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      nextId: 4,
      items: [
        {
          id: 1,
          text: 'Clean home',
          checked: false
        },
        {
          id: 2,
          text: 'Pay utility bill',
          checked: false
        },
        {
          id: 3,
          text: 'Finish Homework',
          checked: true
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
      },
      [CHECK_TODO_ITEM] (state, itemId) {
        state.items.find(i => i.id === itemId).checked = true;
      },
      [UNCHECK_TODO_ITEM] (state, itemId) {
        state.items.find(i => i.id === itemId).checked = false;
      }
    },
    actions: {
        [CREATE_TODO_ITEM] ({commit}, item) {
            commit(CREATE_TODO_ITEM, item)
            // POST to API
        },
        [DELETE_TODO_ITEM] ({commit}, itemId) {
            commit(DELETE_TODO_ITEM, itemId)
            // DELET to API
        },
        [CHECK_TODO_ITEM] ({commit}, itemId) {
            commit(CHECK_TODO_ITEM, itemId)
            // DELET to API
        },
        [UNCHECK_TODO_ITEM] ({commit}, itemId) {
            commit(UNCHECK_TODO_ITEM, itemId)
            // DELET to API
        }
    }
  });

export default store;