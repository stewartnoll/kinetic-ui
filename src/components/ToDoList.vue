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
              <v-checkbox v-model=item.complete></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-bind:class="{'textComplete':item.complete}">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple @click="deleteItem(item.id)">
                <v-icon color="grey lighten-1">delete_forever</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
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
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  export default {
    data () {
      return {
        items: [],
        loading: true,
        showNewRow: false,
        newItemText: null,
        nextId: 4
      }
    },
    methods: {
      getItems() {
        sleep(500).then(() => {
          this.items = [
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
          ];
          this.loading = false;
        });
      },
      addItem() {
        this.items.push({text: this.newItemText, id: this.nextId++});
        this.hideNewItem();
      },
      hideNewItem() {
        this.newItemText = null;
        this.showNewRow = false;
      },
      deleteItem(id) {
        this.items.splice(this.items.findIndex(i => i.id === id), 1);
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

.textComplete {
  text-decoration: line-through;
}
</style>
