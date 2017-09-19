<template>
  <div class="bgs-container">
    <h4>Backgrounds</h4>
      
    <div class="cards-list">
      <div class="bg-card" v-for="bg in $store.state.backgrounds" v-bind:key="bg.url">
        <img class="bg-img" :src="bg.steamUrl" @click="setBackground(bg.steamUrl)">
      </div>
    </div>

    </virtual-scroller>
  </div>
</template>

<script>
export default {
  methods: {
    setBackground (bg) {
      console.log('some shit')
      this.$store.commit('setBackground', bg)
    }
  }
}
</script>

<style scoped>
.bgs-container {
  width: 100%;
  margin: 20px;
  overflow-y: scroll;
  top: 10px;
  bottom: 10px;
  height: 66vh;
}

.bg-card {
  width: 250px;
  height: 200px;
  box-shadow: 0 2rem 4rem 0.25rem rgba(46, 43, 55, 0.575);
}

.bg-img {
  width: 100%;
}

.cards-list {
  display: flex;
  flex-wrap: wrap;
}

</style>
