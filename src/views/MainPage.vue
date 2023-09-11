<template>
  <div class="page flex flex-col items-center">
    <div class="empty" v-if="!posts.length">
      <span class="text-gray-600">No posts are here</span>
    </div>
    <div class="main" v-else>
      <SearchInput class="search-input mb-4" @update:search-text="onSearchHandler" />
      <ul class="post-list">
        <li v-for="post in filteredList" :key="post.id">
          <PostCard :post="post" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import {computed, onMounted, ref} from "vue";
import PostCard from "@/components/posts/PostCard.vue";
import SearchInput from "@/components/search/SearchInput.vue";
import IUser from "@/types/user.type";
import IPost from "@/types/post.type";

const searchText = ref<string>("");

const store = useStore();

const posts = computed(() => {
  return store.state.postsStore.posts;
});

const onSearchHandler = (searchString: string) => {
  searchText.value = searchString;
}

const filteredList = computed(() => {
  return store.state.postsStore.posts.filter((item: IPost) => {
    return item.authorName.toLowerCase().includes(searchText.value.toLowerCase())
  });
});

const initData = async () => {
  try {
    await store.dispatch("postsStore/asyncSetPosts");
  } catch (e) {
    console.log(e);
  }
};

onMounted(async () => {
  await initData();
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
  min-width: 600px;
}

@media screen and (max-width: 1200px) {
  .search-input {
    min-width: 300px;
  }
}
</style>
