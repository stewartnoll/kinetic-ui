<template>
    <v-list-tile
        avatar
        >
        <v-list-tile-action>
            <v-checkbox v-model=checked></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content>
            <v-list-tile-title v-bind:class="{'textComplete':checked}">
            {{ model.text }}
            </v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
            <v-btn icon ripple @click="deleteItem(model.id)"> 
                <v-icon color="grey lighten-1">delete_forever</v-icon>
            </v-btn>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script>
import {DELETE_TODO_ITEM, CHECK_TODO_ITEM, UNCHECK_TODO_ITEM} from '../stores/ActionTypes'

export default {
    props: {
        model: {
            type: Object
        }
    },
    computed: {
        checked: {
            get() {
                return this.$store.state.items.find(i => i.id == this.model.id).checked
            },
            set(value) {
                if(value) {
                    this.$store.dispatch(CHECK_TODO_ITEM, this.model)
                } else {
                    this.$store.dispatch(UNCHECK_TODO_ITEM, this.model)
                }
            }
        }
    },
    methods: {
      deleteItem(id) {
        this.$store.dispatch(DELETE_TODO_ITEM, id)
      }
    },
}
</script>

<style scoped>
.textComplete {
  text-decoration: line-through;
}
</style>

