import { types } from "@/store/modules/comics/types";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    ...mapState(types.PATH, ["randomComics", "currentComic"]),
  },
  methods: {
    ...mapActions(types.PATH, {
      updateSelectedRating: types.actions.UPDATE_SELECTED_RATING,
      updateCurrentComic: types.actions.UPDATE_CURRENT_COMIC,
    }),
    prevSlide() {
      // eslint-disable-next-line operator-linebreak
      this.currentIndex =
        (this.currentIndex - 1 + this.randomComics.length) % this.randomComics.length;
      this.updateSelectedRating(0);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.randomComics.length;
      this.updateSelectedRating(0);
    },
  },
  watch: {
    currentIndex(newValue, oldValue) {
      if (newValue !== oldValue) {
        const newCurrentComic = this.randomComics[newValue];
        this.updateCurrentComic(newCurrentComic);
      }
    },
  },
};
