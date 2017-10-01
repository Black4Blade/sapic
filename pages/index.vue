<template>
  <div class="container">
    <div class="left-menu-container">
      <left-menu>
      </left-menu>
    </div>
    <div class="backgrounds-container">
      <top-bar />

      <backrounds-list />
    </div>
  </div>
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
.container {
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  overflow: hidden;
}

.left-menu-container {
  min-width: 415px;
  max-width: 650px;
  width: 40vw;
}

.backgrounds-container {
  width: 100%;
  height: 66vh;
}

.title {
  margin: 30px 0;
}

.users {
  list-style: none;
  margin: 0;
  padding: 0;
}

.user {
  margin: 10px 0;
}
</style>
<style>
body {
  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
}
</style>

