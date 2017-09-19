<template>
  <div class="container">
    <div class="left-menu-container">
      <left-menu />
    </div>
    <div class="backgrounds-container">
      <top-bar />
      <div class="preview-container">
        <legacy-index class="zoom_out" />
      </div>
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
    store.commit('setBackgrounds', data)
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

.preview-container {
  height: 33vh;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 2rem 4rem 0.25rem rgba(46, 43, 55, 0.575);
}

.left-menu-container {
  min-width: 150px;
  max-width: 250px;
  width: 20vw;
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

.zoom_out {
  transform: scale(.25);
  transform-origin: 0 0;
  margin: 0;
  width: 400%;
}
</style>
<style>
body {
  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
}
</style>

