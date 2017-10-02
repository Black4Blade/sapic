<template>
  <v-container fluid grid-list-md>

    <v-layout row wrap>
      <v-flex xs4>
        <left-menu>
        </left-menu>
      </v-flex>
      <v-flex xs8 class="backgroundsList">
        <backrounds-list />
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import axios from '~/plugins/axios'
import LegacyIndex from '~/components/LegacyIndex.vue'
import LeftMenu from '~/components/LeftMenu.vue'
import TopBar from '~/components/TopBar.vue'
import BackroundsList from '~/components/BackgroundsList.vue'

export default {
  components: {
    LegacyIndex,
    LeftMenu,
    TopBar,
    BackroundsList
  },

  head () {
    return {
      title: 'Users'
    }
  },

  async fetch ({ store, params }) {
    let { data } = await axios.get('https://steam.design/bg.json')
    store.commit('setBackgrounds', data.slice(0, 100))
  }
}
</script>

<style scoped>
/* .backgroundsList {
  height: 90vh;
} */
</style>
<style>
</style>

