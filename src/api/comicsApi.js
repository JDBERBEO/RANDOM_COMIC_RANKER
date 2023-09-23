/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_COMIC_URL,
});

export default {
  getRandomComics() {
    return apiClient.get("/randomComics");
  },
};
