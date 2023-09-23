import Vue from "vue";
import Vuex from "vuex";
import { name as nameRandomComics, module as moduleRandomComics } from "@/store/modules/comics";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    [nameRandomComics]: moduleRandomComics,
  },
});
