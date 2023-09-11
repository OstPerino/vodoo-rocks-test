import { createStore } from "vuex";
import postsStore from "@/store/posts.store";

export default createStore({
  modules: {
    postsStore,
  },
});
