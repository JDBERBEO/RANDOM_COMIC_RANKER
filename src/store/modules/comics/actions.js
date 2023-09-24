/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable import/prefer-default-export */
import comicsApi from "@/api/comicsApi";
import { addSelectedRate } from "@/helpers/formatRandomComics";
import { types } from "./types";

export const actions = {
  async [types.actions.FETCH_RANDOM_COMICS]({ commit }) {
    try {
      commit(types.mutations.SET_IS_LOADING, true);
      const { data } = await comicsApi.getRandomComics();
      const selectedRateArray = addSelectedRate(data);

      commit(types.mutations.SET_RANDOM_COMICS, selectedRateArray);
      commit(types.mutations.SET_CURRENT_COMIC, selectedRateArray[0]);
      commit(types.mutations.SET_IS_LOADING, false);
    } catch (error) {
      console.error("error: ", error);
      commit(types.mutations.SET_IS_LOADING, false);
      commit(types.mutations.SET_ERROR, true);
    }
  },
  [types.actions.UPDATE_ERROR_COMICS]({ commit }, payload) {
    commit(types.mutations.SET_ERROR, payload);
  },
  [types.actions.UPDATE_RANDOM_COMICS]({ commit, state }, payload) {
    const updateRandomComics = state.randomComics.map((obj) =>
      obj.num === payload.num ? { ...payload } : obj
    );
    commit(types.mutations.SET_RANDOM_COMICS, updateRandomComics);
  },
  [types.actions.UPDATE_SELECTED_RATING]({ commit }, payload) {
    commit(types.mutations.SET_SELECTED_RATING, payload);
  },
  [types.actions.UPDATE_CURRENT_COMIC]({ commit }, payload) {
    commit(types.mutations.SET_CURRENT_COMIC, payload);
  },
};
