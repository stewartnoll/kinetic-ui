<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Kinetic</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <ToDoList/>
    </v-content>
  </v-app>
</template>

<script>
import ToDoList from './components/ToDoList'

export default {
  name: 'App',
  components: {
    ToDoList
  },
  data () {
    return {
      //
    }
  }
}
</script>
