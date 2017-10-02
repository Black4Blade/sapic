<template>
  <v-card class="mainCard">
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 md4 v-for="bg in $store.state.backgrounds" v-bind:key="bg.url">
        <v-card>
          <v-card-media :src="bg.steamUrl" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              {{ bg.name }}
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
  </v-card>
</template>

<script>
export default {
  methods: {
    setBackground (bg) {
      this.$store.commit('setBackground', bg)
    }
  }
}
</script>

<style scoped>
.mainCard {
  height: 90vh !important;
  overflow: scroll;
}

.primary-title {
  font-size: 20px;
}
</style>
