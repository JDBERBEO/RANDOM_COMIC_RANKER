<template>
  <div class="error-comics-container">
    <h1 class="error-comics-container__title">Upps...something when wrong</h1>
    <p class="error-comics-container__subtitle">We are going to retry in 5 seconds</p>
  </div>
</template>

<script>
import { types } from "@/store/modules/comics/types";
import { mapActions, mapState } from "vuex";

export default {
  name: "ErrorComics",
  data() {
    return {
      retryLapse: 5000,
      intervalId: null,
    };
  },
  computed: {
    ...mapState(types.PATH, ["error"]),
  },
  methods: {
    ...mapActions(types.PATH, { fetchRandomComics: types.actions.FETCH_RANDOM_COMICS }),
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.fetchRandomComics();
    }, this.retryLapse);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>
