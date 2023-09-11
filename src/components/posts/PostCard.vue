<template>
  <div class="post-card flex flex-col bg-white p-4">
    <span class="title text-lg text-blue-700 capitalize mb-4">
      {{ post.title }}
    </span>
    <span class="body pb-2">{{ post.body }}</span>
    <span class="author text-gray-400">{{ post.authorName }}</span>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import IPost from "@/types/post.type";

const props = defineProps({
  post: {
    type: Object as PropType<IPost>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.post-card {
  width: 365px;
  min-height: 175px;
  height: fit-content;
}

@media screen and (max-width: 405px) {
  .post-card {
    width: 315px;
  }
}
</style>
