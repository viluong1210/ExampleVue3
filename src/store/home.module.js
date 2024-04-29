import { TagsService, ArticlesService } from "../common/api.service";
import { FETCH_TAGS } from "./actions.type";
import { FETCH_START, FETCH_END, SET_TAGS, TAG_ADD } from "./mutations.type";

const state = {
  tags: [],
  articles: [],
  isLoading: false,
  articlesCount: 0,
};

const getters = {
  articlesCount(state) {
    return state.articlesCount;
  },
  articles(state) {
    return state.articles;
  },
  isLoading(state) {
    return state.isLoading;
  },
  tags(state) {
    return state.tags;
  },
};

const actions = {
  [FETCH_TAGS]({ commit }) {
    commit(FETCH_START);
    return TagsService.get()
      .then(({ data }) => {
        commit(SET_TAGS, data.tags);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        commit(FETCH_END);
      });
  },
  [TAG_ADD]({ commit }) {
    commit(FETCH_START);
    return TagsService.create()
      .then(() => {
        commit(TAG_ADD);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        commit(FETCH_END);
      });
  },
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state) {
    state.isLoading = false;
  },
  [SET_TAGS](state, tags) {
    state.tags = tags;
  },
  [TAG_ADD](state) {
    state.tags = [...state.tags, `tags ${state.tags?.length}`];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
