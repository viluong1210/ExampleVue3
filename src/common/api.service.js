import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "../common/jwt.service";
import { API_URL } from "../common/config";

const app = createApp({});

const ApiService = {
  init() {
    app.use(VueAxios, axios);
    app.config.globalProperties.axios.defaults.baseURL = API_URL;
  },

  setHeader() {
    app.config.globalProperties.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

  query(resource, params) {
    return app.config.globalProperties.axios
      .get(resource, { params })
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },

  get(resource, slug = "") {
    return app.config.globalProperties.axios
      .get(`${resource}/${slug}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },

  post(resource, params) {
    return app.config.globalProperties.axios.post(resource, params);
  },

  update(resource, slug, params) {
    return app.config.globalProperties.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return app.config.globalProperties.axios.put(resource, params);
  },

  delete(resource) {
    return app.config.globalProperties.axios.delete(resource).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export default ApiService;

export const TagsService = {
  get() {
    return ApiService.get("tags");
  },

  create() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 2000);
    });
  },
};

export const ArticlesService = {
  create(params) {
    return ApiService.post("articles", { article: params });
  },
};
