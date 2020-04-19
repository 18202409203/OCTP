<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body {
  height: 100%;
}
body::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
