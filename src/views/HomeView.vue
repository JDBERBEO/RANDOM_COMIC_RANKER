<template>
  <div>
    <loading-comics v-if="isLoading" />
    <carussel-card v-if="!isLoading && randomComics.length" />
    <error-comics v-if="error" />
  </div>
</template>

<script>
import CarusselCard from "@/components/carousel/CarusselCard.vue";
import { mapActions, mapState } from "vuex";
import { types } from "@/store/modules/comics/types";
import LoadingComics from "@/components/carousel/LoadingComics.vue";
import ErrorComics from "@/components/carousel/ErrorComics.vue";

export default {
  name: "HomeView",
  components: {
    CarusselCard,
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
