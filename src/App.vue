<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  mounted () {
    // 换肤判断
    let storeThemeColor = localStorage.getItem('themeColor')
    if (storeThemeColor) {
      document.getElementsByTagName('html')[0].className = storeThemeColor
      localStorage.setItem('themeColor', storeThemeColor)
    } else {
      document.getElementsByTagName('html')[0].className = 'theme-0'
      localStorage.setItem('themeColor', 'theme-0')
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
