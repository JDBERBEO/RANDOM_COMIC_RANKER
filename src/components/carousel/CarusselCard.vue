<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
    <h1 class="main-header">THE RANDOM COMIC RANKER!</h1>
    <div class="tooltip-container">
      <div
        class="tooltip-trigger"
        @mouseover="showTooltip = true"
        @mouseleave="showTooltip = false"
      >
        <button class="refresh-button" @click="refreshComics">↻ Refresh</button>
      </div>
      <div class="tooltip-content" v-if="showTooltip">
        Click here is you want new comics to rate!
      </div>
    </div>
    <div class="carousel-container">
      <button
        @click="prevSlide"
        class="carousel-container__carousel-control carousel-container__carousel-control__left"
      >
        {{ previousIcon }}
      </button>
      <div>
        <div class="carousel-container__carousel">
          <div class="previous-card">
            <img
              v-if="prevImage"
              :src="prevImage.img"
              :alt="prevImage.alt"
              class="previous-card__image"
            />
          </div>
          <div class="current-card-container zoom-container">
            <figure class="current-card-container__current-card zoomable">
              <img
                :src="currentComic.img"
                :alt="currentComic.alt"
                class="current-card-container__current-card__image"
              />
            </figure>
            <div>
              <h1 class="current-card-container__current-card__title">
                COMIC NO.{{ currentIndex + 1 }}
              </h1>
              <p class="current-card-container__current-card__subtitle">CALIFICACIÓN</p>
            </div>
            <rating />
          </div>
          <div class="next-card">
            <img
              v-if="nextImage"
              :src="nextImage.img"
              :alt="nextImage.alt"
              class="previous-card__image"
            />
          </div>
        </div>
      </div>
      <button
        @click="nextSlide"
        class="carousel-container__carousel-control carousel-container__carousel-control__right"
      >
        {{ nextIcon }}
      </button>
    </div>

    <div class="info-card-container">
      <h2 class="info-card-container__title">INFO:</h2>
      <p class="info-card-container__subtitle">Comics rated: {{ totalcomicsRated.length }} / 10</p>
      <p class="info-card-container__subtitle">Comics missing : {{ comicsMissing.join(", ") }}</p>
    </div>
  </div>
</template>

<script>
import { types } from "@/store/modules/comics/types";
import { mapActions, mapState } from "vuex";
import CurrentComic from "@/mixins/currentComic";
import Rating from "./Rating.vue";

export default {
  components: {
    Rating,
  },
  mixins: [CurrentComic],
  data() {
    return {
      // currentIndex: 0,
      showTooltip: false,
      previousIcon: "<",
      nextIcon: ">",
    };
  },
  computed: {
    ...mapState(types.PATH, ["randomComics"]),
    prevImage() {
      // eslint-disable-next-line operator-linebreak
      const prevIndex =
        (this.currentIndex - 1 + this.randomComics.length) % this.randomComics.length;
      return this.randomComics[prevIndex];
    },
    nextImage() {
      const nextIndex = (this.currentIndex + 1) % this.randomComics.length;
      return this.randomComics[nextIndex];
    },
    totalcomicsRated() {
      return this.randomComics.filter((comic) => comic.selectedRating !== 0);
    },
    comicsMissing() {
      return this.randomComics
        .map((comic, index) => (comic.selectedRating === 0 ? index + 1 : -1))
        .filter((index) => index !== -1);
    },
  },
  methods: {
    ...mapActions(types.PATH, { fetchRandomComics: types.actions.FETCH_RANDOM_COMICS }),
    // prevSlide() {
    //   // eslint-disable-next-line operator-linebreak
    //   this.currentIndex =
    //     (this.currentIndex - 1 + this.randomComics.length) % this.randomComics.length;
    // },
    // nextSlide() {
    //   this.currentIndex = (this.currentIndex + 1) % this.randomComics.length;
    // },
    refreshComics() {
      this.fetchRandomComics();
    },
  },
};
</script>
