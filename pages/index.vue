<template>
  <div class="container">
    <div style="width: 20%;">
      <left-menu />
    </div>
    <div style="width: 80%;">
      <top-bar />
      <legacy-index style="transform: scale(.5);
        transform-origin: 0 0;
        width: 200%;" />
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import LegacyIndex from '~/components/LegacyIndex.vue'
import LeftMenu from '~/components/LeftMenu.vue'
import TopBar from '~/components/TopBar.vue'

export default {
  components: {
    LegacyIndex,
    LeftMenu,
    TopBar
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

