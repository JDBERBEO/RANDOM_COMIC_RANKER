<template>
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
            :src="prevImage.url"
            :alt="prevImage.alt"
            class="previous-card__image"
          />
        </div>
        <div class="current-card-container">
          <figure class="current-card-container__current-card">
            <img
              :src="currentImage.url"
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
            :src="nextImage.url"
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
</template>

<script>
import Rating from "./Rating.vue";

export default {
  components: {
    Rating,
  },
  data() {
    return {
      images: [
        { url: "https://imgs.xkcd.com/comics/woodpecker.png", alt: "Image 1" },
        { url: "https://imgs.xkcd.com/comics/woodpecker.png", alt: "Image 1" },
        { url: "https://imgs.xkcd.com/comics/woodpecker.png", alt: "Image 1" },
        { url: "https://imgs.xkcd.com/comics/woodpecker.png", alt: "Image 1" },
        { url: "https://imgs.xkcd.com/comics/haunted_house.png", alt: "Image 2" },
        { url: "https://imgs.xkcd.com/comics/haunted_house.png", alt: "Image 2" },
        { url: "https://imgs.xkcd.com/comics/haunted_house.png", alt: "Image 2" },
      ],
      currentIndex: 0,
      previousIcon: "<",
      nextIcon: ">",
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    prevImage() {
      const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      return this.images[prevIndex];
    },
    nextImage() {
      const nextIndex = (this.currentIndex + 1) % this.images.length;
      return this.images[nextIndex];
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    ComicsArray() {
      return this.images.slice().sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style scoped>
.prev-slide img,
.current-slide img,
.next-slide img {
  max-width: 100%;
  height: auto;
  transition: opacity 0.5s; /* Use opacity transition for smooth image change */
}

.blurred-image {
  filter: blur(3px); /* Apply a 5px blur to the previous and next images */
}

.prev-slide {
  text-align: right;
}

.next-slide {
  text-align: left;
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}
</style>
