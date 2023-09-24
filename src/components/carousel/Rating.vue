<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="rating">
    <label
      data-testId="star"
      v-for="rating in 5"
      :key="rating"
      class="star"
      :class="{ filled: rating <= selectedRating || rating <= currentComic.selectedRating }"
      @click="selectRating(rating)"
    ></label>
  </div>
</template>

<script>
import CurrentComic from "@/mixins/currentComic";
import { mapActions, mapState } from "vuex";
import { types } from "@/store/modules/comics/types";

export default {
  name: "RatingMain",
  mixins: [CurrentComic],
  data() {
    return {
      wha: 0,
    };
  },
  computed: {
    ...mapState(types.PATH, ["selectedRating"]),
  },
  methods: {
    ...mapActions(types.PATH, { updateRandomComics: types.actions.UPDATE_RANDOM_COMICS }),
    selectRating(rating) {
      this.updateSelectedRating(rating);
      this.updateRatingInCurrentComic(this.selectedRating);
    },
    updateRatingInCurrentComic(comicRated) {
      this.currentComic.selectedRating = comicRated;
      this.updateRandomComics(this.currentComic);
    },
  },
};
</script>
