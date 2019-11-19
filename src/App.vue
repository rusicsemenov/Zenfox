<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text to="/">
        Zenfox
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer>
      <span class="caption font-weight-thin" v-if="usersCount"
        >Пользователей базе {{ usersCount }}</span
      >
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
    <vialanSnackbar />
  </v-app>
</template>

<script>
import vialanSnackbar from "./components/Snackbar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    vialanSnackbar
  },
  name: "App",
  computed: {
    ...mapGetters(["usersCount"])
  }
};
</script>


<style lang="sass">
*
  &::-webkit-scrollbar-track
    box-shadow: inset 0 0 6px rgba(#424242, 0.3)
    border-radius: 2px
    background-color: darken(#303030, 5%)
  &::-webkit-scrollbar
    width: 10px
    background-color: #303030
  &::-webkit-scrollbar-thumb
    border-radius: 2px
    box-shadow: inset 0 0 6px rgba(#424242 ,.3)
    background-color: lighten(#424242,30%)

.pointer
  cursor: pointer

a
  text-decoration: none
  color: inherit

i.v-icon.active:hover
  transform: scale(1.2)

.hover-red:hover
  color: #FF7F50

.hover-green:hover
  color: #90EE90

.nowrap
  white-space: nowrap

.prewrap
  white-space: pre-wrap


</style>
