<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-title>ToDo:</v-toolbar-title>
          <v-btn icon ripple align-right @click="showNewRow = true" :disabled="showNewRow">
            <v-icon color="grey lighten-1">queue</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line subheader>
          <ToDoListItem
            v-for="item in items"
            :key="item.id"
            :model=item
          ></ToDoListItem>
          <v-list-tile
            v-if=showNewRow
            avatar
            >
            <v-list-tile-action>
                <v-checkbox disabled></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
                <v-text-field
                label="Solo"
                placeholder="New Item..."
                solo
                @keyup.native.enter="addItem"
                v-model="newItemText"
                ></v-text-field>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple @click="hideNewItem">
                <v-icon color="grey lighten-1">delete_forever</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import ToDoListItem from './ToDoListItem.vue'
  import store from '../stores/ToDoItemStore'
  import {CREATE_TODO_ITEM} from '../stores/MutationTypes'

  export default {
    data () {
      return {
        showNewRow: false,
        newItemText: null
      }
    },
    computed: {
      items () {
        return store.state.items
      }
    },
    methods: {
      addItem() {
        store.dispatch(CREATE_TODO_ITEM, {text: this.newItemText})
        this.hideNewItem()
      },
      hideNewItem() {
        this.newItemText = null
        this.showNewRow = false
      }
    },
    components: {
      ToDoListItem
    }
  }
</script>

<style scoped>
</style>
