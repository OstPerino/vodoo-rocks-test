<template>
  <div class="loader" v-if="isLoading">
    <div class="loader-spinner"></div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import {computed} from "vue";

const store = useStore();

const isLoading = computed(() => {
  return store.state.layoutStore.isLoader
});
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 999;
}

.loader-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
