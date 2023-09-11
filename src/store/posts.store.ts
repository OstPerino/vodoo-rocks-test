import IPost from "@/types/post.type";
import {fetchPosts} from "@/services/post.service";
import {fetchUser} from "@/services/user.service";
import {useToast} from "vue-toastification";

export default {
  namespaced: true,
  state: {
    posts: [] as Array<IPost>,
  },
  mutations: {
    setPosts(state: any, payload: IPost[]) {
      state.posts = payload;
    },
  },
  actions: {
    async asyncSetPosts({ commit }: any) {
      try {
        const response = await fetchPosts();
        const posts = response.data;

        const transformedPosts = await Promise.all(posts.map(async (post: IPost) => {
          const author = await fetchUser(post.userId);
          return { ...post, authorName: author.data.username };
        }));

        commit("setPosts", transformedPosts);
      } catch (e: any) {
        const toast = useToast();
        toast.error("Не удалось получить список постов");
      }
    }
  },
};
