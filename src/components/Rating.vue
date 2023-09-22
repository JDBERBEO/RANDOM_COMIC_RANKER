<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="rating">
    <label
      v-for="rating in 5"
      :key="rating"
      class="star"
      :class="{ filled: rating <= selectedRating }"
      @click="selectRating(rating)"
    ></label>
  </div>
</template>

<script>
export default {
  name: "RatingMain",
  props: {
    msg: String,
  },
  data() {
    return {
      selectedRating: 0,
    };
  },
  methods: {
    selectRating(rating) {
      this.selectedRating = rating;
    },
  },
};
</script>
