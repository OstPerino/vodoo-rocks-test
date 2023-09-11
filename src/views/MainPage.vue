<template>
  <div class="page flex flex-col items-center">
    <PostsEmptyState v-if="!posts.length" />
    <div class="main flex flex-col items-center" v-else>
      <SearchInput
        class="search-input mb-4"
        @update:search-text="onSearchHandler"
      />
      <ul class="post-list">
        <li v-for="post in filteredList" :key="post.id">
          <PostCard :post="post" />
        </li>
      </ul>
      <PostsEmptyState v-if="!filteredList.length" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import PostCard from "@/components/posts/PostCard.vue";
import SearchInput from "@/components/search/SearchInput.vue";
import PostsEmptyState from "@/components/posts/PostsEmptyState.vue";
import IPost from "@/types/post.type";

const searchText = ref<string>("");

const store = useStore();

const posts = computed(() => {
  return store.state.postsStore.posts;
});

const onSearchHandler = (searchString: string) => {
  searchText.value = searchString;
};

const filteredList = computed(() => {
  return store.state.postsStore.posts.filter((item: IPost) => {
    return item.authorName
      .toLowerCase()
      .includes(searchText.value.toLowerCase());
  });
});

onMounted(async () => {
  store.commit("layoutStore/showLoader");
  await store.dispatch("postsStore/asyncSetPosts");

  const timeoutId = setTimeout(() => {
    store.commit("layoutStore/hideLoader");
    clearTimeout(timeoutId);
  }, 2000);
});
</script>

<style scoped lang="scss">
.post-list {
  display: flex;
  flex: 3;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
}

.search-input {
  max-width: 800px;
  min-width: 400px;
}

@media screen and (max-width: 1200px) {
  .search-input {
    min-width: 300px;
  }
}
</style>
