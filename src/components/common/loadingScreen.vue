<template>
  <!-- Loader -->
  <div class="dt-loader-container" v-if="overlay">
    <div class="dt-loader">
      <svg class="circular" viewBox="25 25 50 50">
        <circle
          class="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        ></circle>
      </svg>
    </div>
  </div>
  <!-- /loader -->
</template>

<script>
export default {
  mounted() {},
  computed: {
    overlay() {
      return this.$store.state.loadingModule.loading;
    },
    overlayText() {
      return this.$store.state.overlay.text;
    },
  },
};
</script>

<style lang="scss" scoped></style>
