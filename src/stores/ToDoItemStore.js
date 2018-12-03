import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import {CREATE_TODO_ITEM, 
  DELETE_TODO_ITEM,
  CHECK_TODO_ITEM,
  UNCHECK_TODO_ITEM,
  GET_TODO_ITEMS} from './ActionTypes'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      nextId: 4,
      items: null
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
      },
      SetToDoItems(state, items) {
        state.items = items;
      }
    },
    actions: {
        [GET_TODO_ITEMS] ({commit}) {
          axios({
            method:'get',
            url:`${process.env.VUE_APP_API_ROOT_URL}/todos`,
            responseType:'application/json'
          })
          .then((response) => {
            commit('SetToDoItems', response.data);
          })
          .catch((reason) => {
            console.log(reason);
          });
        },
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