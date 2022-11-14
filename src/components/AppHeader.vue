<script setup>
import NavBarComponent from '@/components/shared/NavBarComponent.vue';
</script>


<template>
  <header>
    <!-- SHOP LOGO -->
    <div class="emg-logo-container">
      <img src="@/assets/img/egg-shop-logo.png" alt="Egg Shop Logo" class="emg-img-fluid emg-shop-logo">
    </div>

    <!-- NavBar containing the router links to the various pages -->
    <NavBarComponent />

  </header>
</template>



<style lang="scss" scoped>
.emg-logo-container {
  // Size
  width: max(300px, 50vw);
  max-width: 500px;

  // Position
  margin: 0 auto;
}

.emg-img-fluid {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>