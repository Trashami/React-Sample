<template>
  <div id="app">
    <Header />
    <router-view /> <!-- This is where the routed components will be rendered -->
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
}
</style>
