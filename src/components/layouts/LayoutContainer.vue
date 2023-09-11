<template>
  <div class="layout-container">
    <UILoader />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

import UILoader from "@/components/UI/UILoader.vue";
</script>

<style scoped lang="scss">
.layout-container {
  width: 100vw;
  height: 100vh;
  position: fixed;

}
</style>