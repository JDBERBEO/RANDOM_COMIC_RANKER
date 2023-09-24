<template>
  <div data-testId="HomeViewContainer">
    <loading-comics v-if="isLoading" data-testId="loadingComics" />
    <carousel v-if="!isLoading && randomComics.length" data-testId="carousel" />
    <error-comics v-if="error" />
  </div>
</template>

<script>
import Carousel from "@/components/carousel/Carousel.vue";
import { mapActions, mapState } from "vuex";
import { types } from "@/store/modules/comics/types";
import LoadingComics from "@/components/carousel/LoadingComics.vue";
import ErrorComics from "@/components/carousel/ErrorComics.vue";

export default {
  name: "HomeView",
  components: {
    Carousel,
    LoadingComics,
    ErrorComics,
  },
  computed: {
    ...mapState(types.PATH, ["isLoading", "randomComics", "error"]),
  },
  methods: {
    ...mapActions(types.PATH, { fetchRandomComics: types.actions.FETCH_RANDOM_COMICS }),
  },
  created() {
    this.fetchRandomComics();
  },
};
</script>
