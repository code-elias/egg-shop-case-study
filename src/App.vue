<template>
  <div id="app">
    <!-- Header -->
    <AppHeader />

    <!-- RouterView  = Main  -->
      <RouterView />
    <!-- Footer -->
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