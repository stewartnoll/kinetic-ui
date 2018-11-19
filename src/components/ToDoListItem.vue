<template>
    <v-list-tile
        avatar
        >
        <v-list-tile-action>
            <v-checkbox v-model=model.complete></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content>
            <v-list-tile-title v-bind:class="{'textComplete':model.complete}">
            {{ model.text }}
            </v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
            <!-- <v-btn icon ripple @click="deleteItem(model.id)"> -->
            <v-btn icon ripple @click="$emit('deleteItem', model.id)"> 
            <v-icon color="grey lighten-1">delete_forever</v-icon>
            </v-btn>
        </v-list-tile-action>
    </v-list-tile>
</template>

<script>
export default {
    props: {
        model: {
            type: Object
        }
    }
}
</script>

<style scoped>
.textComplete {
  text-decoration: line-through;
}
</style>

