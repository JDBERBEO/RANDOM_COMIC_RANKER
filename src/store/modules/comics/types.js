export const moduleRandomComics = "@module/comics";

export const types = {
  PATH: `${moduleRandomComics}`,
  getters: {},
  mutations: {
    SET_RANDOM_COMICS: "@mutations/setRandomComics",
    SET_IS_LOADING: "@mutations/setIsLoading",
    SET_ERROR: "@mutations/setError",
  },
  actions: {
    FETCH_RANDOM_COMICS: "@actions/fetchRandomComics",
  },
};
