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
      items: []
    },
    mutations: {
      [CREATE_TODO_ITEM] (state, item) {
        state.items.push(item)
      },
      [DELETE_TODO_ITEM] (state, itemId) {
        state.items.splice(state.items.findIndex(i => i.id === itemId), 1)
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
        [CREATE_TODO_ITEM] ({commit, dispatch}, item) {
            axios({
              method:'post',
              url:`${process.env.VUE_APP_API_ROOT_URL}/todos`,
              responseType:'application/json',
              data: item
            })
            .then(() => {
              commit(CREATE_TODO_ITEM, item)
              dispatch(GET_TODO_ITEMS);
            })
            .catch((reason) => {
              console.log(reason);
            });
        },
        [DELETE_TODO_ITEM] ({commit, dispatch}, itemId) {
            axios({
              method:'delete',
              url:`${process.env.VUE_APP_API_ROOT_URL}/todos/${itemId}`
            })
            .then(() => {
              commit(DELETE_TODO_ITEM, itemId)
              dispatch(GET_TODO_ITEMS);
            })
            .catch((reason) => {
              console.log(reason);
            });
        },
        [CHECK_TODO_ITEM] ({commit, dispatch}, item) {
            item.checked = true;
            axios({
              method:'put',
              url:`${process.env.VUE_APP_API_ROOT_URL}/todos/${item.id}`,
              responseType:'application/json',
              data: item
            })
            .then(() => {
              dispatch(GET_TODO_ITEMS);
            })
            .catch((reason) => {
              console.log(reason);
            });
        },
        [UNCHECK_TODO_ITEM] ({commit, dispatch}, item) {
          item.checked = false;
          axios({
            method:'put',
            url:`${process.env.VUE_APP_API_ROOT_URL}/todos/${item.id}`,
            responseType:'application/json',
            data: item
          })
          .then(() => {
            dispatch(GET_TODO_ITEMS);
          })
          .catch((reason) => {
            console.log(reason);
          });
            // DELET to API
        }
    }
  });

export default store;