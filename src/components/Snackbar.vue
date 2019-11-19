<template>
  <v-snackbar
    v-model="snackbar.snackbar"
    :color="snackbar.snackbarColor"
    bottom
    right
  >
    {{ snackbar.snackbarText }}
    <v-btn dark text @click="snackbar.snackbar = !snackbar.snackbar"
      >закрыть</v-btn
    >
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackbar: {
      get: function() {
        return this.$store.getters.snackbar;
      },
      set: function() {
        this.$store.dispatch("closeSnackbar");
      }
    }
  }
};
</script>