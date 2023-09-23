/* eslint-disable import/prefer-default-export */
import comicsApi from "@/api/comicsApi";
import { types } from "./types";

export const actions = {
  async [types.actions.FETCH_RANDOM_COMICS]({ commit }) {
    try {
      commit(types.mutations.SET_IS_LOADING, true);
      const { data } = await comicsApi.getRandomComics();
      commit(types.mutations.SET_IS_LOADING, false);
      commit(types.mutations.SET_ERROR, false);
      commit(types.mutations.SET_RANDOM_COMICS, data);
    } catch (error) {
      commit(types.mutations.SET_IS_LOADING, false);
      commit(types.mutations.SET_ERROR, true);
    }
  },
};
