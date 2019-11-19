<template>
  <vialanLoader v-if="loader" />
  <v-container v-else>
    <v-data-table
      ref="table"
      dense
      :headers="headers"
      :items="allUsers"
      :search="search"
      item-key="id"
      class="elevation-1"
      :loading="loaddata"
      multi-sort
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            Пользователи
            <span class="caption font-weight-thin"
              >(всего в базе {{ usersCount }} пользователей)</span
            >
          </v-toolbar-title>
          <div class="flex-grow-1"></div>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                @click="reload"
                class="mb-2"
                icon
                v-on="on"
                :disabled="loaddata"
              >
                <v-icon>mdi-reload</v-icon>
              </v-btn>
            </template>
            <span>Повоторить запрос</span>
          </v-tooltip>
        </v-toolbar>
        <v-text-field
          v-model="search"
          label="фильтр"
          class="mx-2"
          append-icon="mdi-filter-outline"
          clearable
        ></v-text-field>
      </template>

      <template v-slot:item.name="{ item }">
        <router-link :to="{ path: 'todo', query: { userId: item.id } }">{{
          item.name
        }}</router-link>
      </template>
    </v-data-table>
    <v-pagination
      v-model="page"
      :length="pages"
      :total-visible="5"
      v-if="pages > 1"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import vialanLoader from "../components/Loader";

export default {
  components: {
    vialanLoader
  },
  data() {
    return {
      search: "",
      loaddata: false,
      page: 1,
      rowsPerPage: 5,
      headers: [
        {
          text: "Имя",
          align: "left",
          value: "name"
        },
        { text: "E-mail", value: "email" },
        { text: "Телефон", value: "phone" }
      ]
    };
  },
  computed: {
    ...mapGetters(["allUsers", "usersCount", "loader"]),
    pages() {
      return this.usersCount / this.rowsPerPage;
    }
  },
  methods: {
    async reload() {
      this.loaddata = true;
      await this.$store.dispatch("getUsers", {
        page: this.page
      });
      this.loaddata = false;
    }
  },
  async created() {
    this.$store.dispatch("loaderOn");
    await this.reload();
    this.$store.dispatch("loaderOff");
  },
  mounted() {
    this.page = parseInt(this.$route.query.page)
      ? parseInt(this.$route.query.page)
      : 1;
  },
  watch: {
    page(val) {
      if (parseInt(this.$route.query.page) != this.page)
        this.$router.push({ path: "/", query: { page: val } });
      this.reload();
    },
    "$route.query.page"(val) {
      this.page = val;
      this.reload();
    }
  }
};
</script>