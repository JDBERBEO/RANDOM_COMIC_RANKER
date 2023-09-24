export const moduleRandomComics = "@module/comics";

export const types = {
  PATH: `${moduleRandomComics}`,
  getters: {},
  mutations: {
    SET_RANDOM_COMICS: "@mutations/setRandomComics",
    SET_IS_LOADING: "@mutations/setIsLoading",
    SET_ERROR: "@mutations/setError",
    SET_SELECTED_RATING: "@mutations/setSelectedRating",
    SET_CURRENT_COMIC: "@mutations/setCurrentComic",
  },
  actions: {
    FETCH_RANDOM_COMICS: "@actions/fetchRandomComics",
    UPDATE_ERROR_COMICS: "@actions/updateErrorComics",
    UPDATE_RANDOM_COMICS: "@actions/updateRandomComics",
    UPDATE_SELECTED_RATING: "@actions/updateSelectedRating",
    UPDATE_CURRENT_COMIC: "actions/updateCurrentComic",
  },
};
