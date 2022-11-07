<template>
  <header>
    
    <div class="emg-logo-container">
      <img src="@/assets/img/egg-shop-logo.png" alt="Egg Shop Logo" class="emg-img-fluid emg-shop-logo">
    </div>

    <NavBarComponent />

  </header>
</template>

<script>
import NavBarComponent from '@/components/shared/NavBarComponent.vue';

  export default {
    data() {
      return {
        
      }
    },

    components: {
      NavBarComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>