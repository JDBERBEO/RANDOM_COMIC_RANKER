import { types } from "./types";

/* eslint-disable import/prefer-default-export */
export const mutations = {
  [types.mutations.SET_RANDOM_COMICS](state, payload) {
    console.log(payload);
    state.randomComics = payload;
  },
  [types.mutations.SET_IS_LOADING](state, payload) {
    state.isLoading = payload;
  },
  [types.mutations.SET_ERROR](state, payload) {
    state.error = payload;
  },
};
