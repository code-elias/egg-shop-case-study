<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from './components/AppFooter.vue';
// import Homepage from '@/components/Homepage.vue';
// import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <div id="app">
    <!-- Header -->
    <AppHeader />


    <!-- <Homepage /> -->
    <!-- RouterView  = Main  -->
    <RouterView />
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>

</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");
</style>