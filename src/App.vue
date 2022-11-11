<script setup>
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div id="app">
    <!-- Header -->
    <AppHeader />

    <!-- RouterView  = Main  -->
    <RouterView />
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>

import AppHeader from './components/AppHeader.vue';

export default {

  components: {
    AppHeader
  }
}

</script>

<style>

</style>