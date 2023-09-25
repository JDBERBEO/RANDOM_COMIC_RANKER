import getRandomComics from "./getRandomComics";

/* eslint-disable class-methods-use-this */
class ComicsApi {
  getRandomComics() {
    console.log("´rie");
    return Promise.resolve({ data: getRandomComics });
  }
}

export default new ComicsApi();
