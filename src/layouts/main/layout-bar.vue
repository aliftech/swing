<template>
  <v-app :theme="theme">
    <layoutAppVue v-on:tema="tema"></layoutAppVue>
    <layoutViewVue></layoutViewVue>
  </v-app>
</template>

<script>
import layoutAppVue from "./layout-app.vue";
import layoutViewVue from "./layout-view.vue";
import { themeSwitcher } from "@/store/theme";

export default {
  components: {
    layoutAppVue,
    layoutViewVue,
  },
  data() {
    return {
      theme: null,
      store: themeSwitcher(),
    };
  },
  mounted() {
    this.getTheme();
  },
  methods: {
    tema() {
      this.store.change();
      this.getTheme();
    },
    getTheme() {
      this.theme = this.store.theme;
    },
  },
};
</script>
