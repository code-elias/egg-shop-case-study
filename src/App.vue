<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from './components/AppFooter.vue';
import Homepage from '@/components/Homepage.vue';
</script>

<template>
  <div id="app">
    <!-- Header -->
    <AppHeader />

    <!-- Homepage -->
    <Homepage />
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