import { types } from "./types";

/* eslint-disable import/prefer-default-export */
export const mutations = {
  [types.mutations.SET_RANDOM_COMICS](state, payload) {
    state.randomComics = payload;
  },
  [types.mutations.SET_IS_LOADING](state, payload) {
    state.isLoading = payload;
  },
  [types.mutations.SET_ERROR](state, payload) {
    state.error = payload;
  },
  [types.mutations.SET_SELECTED_RATING](state, payload) {
    state.selectedRating = payload;
  },
  [types.mutations.SET_CURRENT_COMIC](state, payload) {
    state.currentComic = payload;
  },
};
