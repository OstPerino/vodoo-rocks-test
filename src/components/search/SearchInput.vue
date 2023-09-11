<template>
  <div class="search-input-container">
    <UIInput v-model="searchText" />
  </div>
</template>

<script setup lang="ts">
import {ref, watchEffect} from "vue";
import UIInput from "@/components/UI/UIInput.vue";

const emits = defineEmits(["update:searchText"]);

const searchText = ref<string>("");

watchEffect(() => {
  emits("update:searchText", searchText.value);
});
</script>

<style scoped></style>
