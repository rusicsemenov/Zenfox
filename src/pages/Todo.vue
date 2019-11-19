<template>
  <vialanLoader v-if="loader" />
  <v-container v-else>
    <template v-if="user">
      <h1 class="headline">{{ user.name }}</h1>
      <v-divider></v-divider>
    </template>
    <span v-else
      >Нет данныхпользователя из-за перезагрузки страницы, добавить проверку и
      дополнительный запрос не проблемма</span
    >

    <v-btn block text class="mb-2" @click="back">вернуться</v-btn>
    <v-row class="justify-center">
      <v-list>
        <v-list-item
          v-for="item in todos"
          :key="item.id"
          @click="item.completed = item.completed ? false : true"
        >
          <v-list-item-icon>
            <v-icon v-if="item.completed" color="green"
              >mdi-check-circle</v-icon
            >
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
import { axiosCatch } from "../axiosCatch";
import vialanLoader from "../components/Loader";
import { mapGetters } from "vuex";

export default {
  components: {
    vialanLoader
  },
  data() {
    return {
      userId: 0,
      todos: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async findTodo() {
      this.$store.dispatch("loaderOn");
      await axios
        .get(`https://jsonplaceholder.typicode.com/todos?userId=${this.userId}`)
        .then(response => response.data)
        .then(data => {
          if (data.length > 0) {
            this.todos = data;
            this.$store.dispatch("snackbarInfo", `Данные получены`);
          } else {
            this.$store.dispatch("snackbarError", `Нет заданий`);
          }
        })
        .catch(error => axiosCatch(error, dispatch))
        .finally(() => this.$store.dispatch("loaderOff"));
    }
  },
  computed: {
    ...mapGetters(["loader"]),
    user() {
      if (this.userId === undefined) return undefined;
      return this.$store.getters.getUserById(this.userId);
    }
  },
  mounted() {
    this.userId = parseInt(this.$route.query.userId)
      ? parseInt(this.$route.query.userId)
      : 1;
  },
  watch: {
    userId(val) {
      if (parseInt(this.$route.query.userId) != this.userId)
        this.$router.push({ path: "/", query: { userId: val } });
      this.findTodo();
    },
    "$route.query.userId"(val) {
      this.userId = val;
      this.findTodo();
    }
  }
};
</script>
