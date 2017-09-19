<template>
  <div class="menu-container">
    <button class="btn" @click="randomBackground">Random bg</button>
  </div>
</template>

<script>
export default {
  methods: {
    randomBackground () {
      this.$store.commit('randomBackground')
    }
  }
}
</script>

<style scoped>
.menu-container {
  border-right: 2px solid #999;
  height: 100vh;
  background: rgba(46, 43, 55, 0.3);
  box-shadow: 0 2rem 4rem 0.25rem rgba(46, 43, 55, 0.575);
}

.btn {
  border-radius: 5px;
  font-family: Arial;
  color: #000000;
  font-size: 20px;
  padding: 5px 10px 5px 10px;
  border: solid #000000 1px;
  text-decoration: none;
  background: transparent;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.btn:hover {
  background: #000000;
  color: white;
  text-decoration: none;
  transition: 0.3s;
  user-select: none;
}

.btn:focus {
  outline: none !important;
}

.btn:active {
  background: white;
  user-select: none;
}
</style>
