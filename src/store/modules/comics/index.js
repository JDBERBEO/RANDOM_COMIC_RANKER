/* eslint-disable import/prefer-default-export */
import { moduleRandomComics } from "./types";
import { state } from "./state";
import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const module = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export const name = moduleRandomComics;
