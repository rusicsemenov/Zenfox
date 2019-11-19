<template>
  <v-list nav dense>
    <template v-for="(link, index) in links">
      <v-divider
        v-if="link.type === 'divider'"
        class="my-2"
        :key="index"
      ></v-divider>

      <v-list-item v-if="link.type === 'link'" link :key="index" :to="link.url">
        <v-list-item-icon>
          <v-icon v-text="link.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="link.title"></v-list-item-title>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          type: "link",
          icon: "mdi-home",
          title: "Главная",
          url: "/"
        },
        {
          type: "link",
          icon: "mdi-nodejs",
          title: "JS",
          url: "/jsblog"
        },
        {
          type: "link",
          icon: "mdi-animation-outline",
          title: "Анимация",
          url: "/amination"
        },
        {
          type: "link",
          icon: "mdi-image-filter-frames",
          title: "Проекты",
          url: "/projects"
        },
        {
          type: "divider"
        },
        {
          type: "link",
          icon: "mdi-account-card-details-outline",
          title: "Контакты",
          url: "/contacts"
        }
      ]
    };
  }
};
</script>