import home from "./home.module";

import { createStore } from "vuex";

const store = createStore({
  state: { ...home.state },

  mutations: {
    ...home.mutations,
  },
  actions: { ...home.actions },
  getters: {},
});

export default store;
