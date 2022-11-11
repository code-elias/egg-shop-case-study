<script setup>
import AppHeader from "@/components/AppHeader.vue";
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

</script>

<style>

</style>