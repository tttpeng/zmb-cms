<template>
  <div id="app">
    <Side-Nav></Side-Nav>
  <top-bar></top-bar>
  <div class="main-content">
    <side-nav></side-nav>
    <div class="content">
      <router-view></router-view>      
    </div>
  </div>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
    .main-content {
    top: 50px;
    position: relative;
    /*z-index: -1;*/
    width: 100%;
  }
  .content {
    /*float: left;*/
    margin-left: 180px;
    z-index: 1000;
  }
</style>
