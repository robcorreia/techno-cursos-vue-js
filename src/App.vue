<template>
  <div id="app">
    <Header />
    <router-view class="container" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  color: #234;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a.router-link-active {
  color: #4b8;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
