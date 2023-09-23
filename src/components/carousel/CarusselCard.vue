<template>
  <div>
    <h1 class="main-header">THE RANDOM COMIC RANKER!</h1>
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
          <div class="current-card-container">
            <figure class="current-card-container__current-card">
              <img
                :src="currentImage.img"
                :alt="currentImage.alt"
                class="current-card-container__current-card__image"
              />
            </figure>
            <div>
              <h1 class="current-card-container__current-card__title">COMIC NUMERO 1</h1>
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
  </div>
</template>

<script>
import { types } from "@/store/modules/comics/types";
import { mapActions, mapState } from "vuex";
import Rating from "./Rating.vue";

export default {
  components: {
    Rating,
  },
  data() {
    return {
      currentIndex: 0,
      previousIcon: "<",
      nextIcon: ">",
    };
  },
  computed: {
    ...mapState(types.PATH, ["randomComics"]),
    currentImage() {
      console.log("current iamge: ", this.randomComics[this.currentIndex]);
      return this.randomComics[this.currentIndex];
    },
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
  },
  methods: {
    ...mapActions(types.PATH, { fetchRandomComics: types.actions.FETCH_RANDOM_COMICS }),
    prevSlide() {
      // eslint-disable-next-line operator-linebreak
      this.currentIndex =
        (this.currentIndex - 1 + this.randomComics.length) % this.randomComics.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.randomComics.length;
    },
    ComicsArray() {
      return this.images.slice().sort(() => Math.random() - 0.5);
    },
  },
};
</script>
