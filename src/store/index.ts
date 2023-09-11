import { createStore } from "vuex";
import postsStore from "@/store/posts.store";
import layoutStore from "@/store/layout.store";

export default createStore({
  modules: {
    postsStore,
    layoutStore
  },
});
