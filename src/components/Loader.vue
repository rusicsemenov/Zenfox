<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <img src="@/assets/logo.svg" class="image" />
    </v-layout>
  </v-container>
</template>

<style lang="sass">
.image
  animation: rotate 2s infinite ease-in-out

@keyframes rotate
  0%
    transform: rotate(0deg) scale(1)
  40%
    transform: rotate(360deg) scale(.8)
  50%
    transform: rotate(360deg) scale(.8)
  80%
    transform: rotate(720deg) scale(1)
  100%
    transform: rotate(720deg) scale(1)
</style>