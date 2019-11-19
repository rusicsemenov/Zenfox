<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex xs-10 offset-xs1 sm8 offset-sm2>
        <h1>404</h1>
        <p class="vinfo">{{ testMessage }}</p>
        <router-link :to="'/'" class="vlink">на главную</router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      testMessage: 'Страница не найдена'
    };
  }
};
</script>

<style lang="sass" scoped>
.logo
  width: 50px
  padding-right: 5px
  margin-left: 100px
  margin-right: 5px
  border-right: 1px solid black

.vinfo
  color: #999
  border-left: .25rem solid lighten(#3eaf7c, 20%)
  margin-left: 0
  padding-left: 1rem

.vlink
  color: #3eaf7c
  text-decoration: none

</style>