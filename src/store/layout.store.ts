export default {
  namespaced: true,
  state: {
    isLoader: true,
  },
  mutations: {
    showLoader(state: any) {
      state.isLoader = true
    },
    hideLoader(state: any) {
      state.isLoader = false;
    }
  },
};
