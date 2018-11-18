<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-title>ToDo:</v-toolbar-title>
        </v-toolbar>

        <v-list two-line subheader>
          <v-layout justify-center row v-if="loading">
            <v-icon class="loading" color="grey lighten-1" align-center>loop</v-icon>
          </v-layout>
          <v-list-tile
            v-else
            v-for="item in items"
            :key="item.title"
            avatar
          >
            <v-list-tile-action>
              <v-checkbox></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
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
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  export default {
    data () {
      return {
        items: [],
        loading: true,
      }
    },
    methods: {
      getItems() {
        sleep(2000).then(() => {
          this.items = [
            {
              text: 'Clean home'
            },
            {
              text: 'Pay utility bill'
            },
            {
              text: 'Finish Homework'
            }
          ];
          this.loading = false;
        });
      }
    },
    mounted () {
      this.getItems();
    }
  }
</script>

<style scoped>
.loading {
    -webkit-animation:spin 2s linear infinite;
    -moz-animation:spin 2s linear infinite;
    animation:spin 2s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(-360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(-360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(-360deg); } }

</style>
