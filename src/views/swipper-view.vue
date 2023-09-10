<template>
  <div>
    <v-container>
      <titlebarComponent
        :title="title"
        :routes="routes"
        class="mb"
      ></titlebarComponent>
      <v-row class="d-flex justify-center">
        <v-col lg="6" sm="12">
          <defaultComponentVue></defaultComponentVue>
        </v-col>
        <v-col lg="6" sm="12">
          <navigationComponentVue></navigationComponentVue>
        </v-col>
        <v-col lg="6" sm="12">
          <paginationComponentVue></paginationComponentVue>
        </v-col>
        <v-col lg="6" sm="12">
          <fadeComponentVue></fadeComponentVue>
        </v-col>
        <v-col lg="12" sm="12">
          <slideComponentVue></slideComponentVue>
        </v-col>
        <v-col lg="6" sm="12">
          <cubeComponentVue></cubeComponentVue>
        </v-col>
        <v-col lg="6" sm="12">
          <cardComponentVue></cardComponentVue>
        </v-col>
        <v-col lg="6" sm="12">
          <flipComponentVue></flipComponentVue>
        </v-col>
        <v-col lg="6" sm="12">
          <coverflowComponentVue></coverflowComponentVue>
        </v-col>
      </v-row>
      <v-row>
        <myFooter></myFooter>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import titlebarComponent from "@/components/titlebar/titlebar-component.vue";
import myFooter from "@/components/footer/footer-component.vue";
import defaultComponentVue from "@/components/swipper/default-component.vue";
import navigationComponentVue from "@/components/swipper/navigation-component.vue";
import paginationComponentVue from "@/components/swipper/pagination-component.vue";
import slideComponentVue from "@/components/swipper/slide-component.vue";
import fadeComponentVue from "@/components/swipper/fade-component.vue";
import cubeComponentVue from "@/components/swipper/cube-component.vue";
import cardComponentVue from "@/components/swipper/card-component.vue";
import flipComponentVue from "@/components/swipper/flip-component.vue";
import coverflowComponentVue from "@/components/swipper/coverflow-component.vue";

export default {
  components: {
    titlebarComponent,
    myFooter,
    defaultComponentVue,
    navigationComponentVue,
    paginationComponentVue,
    slideComponentVue,
    fadeComponentVue,
    cubeComponentVue,
    cardComponentVue,
    flipComponentVue,
    coverflowComponentVue,
  },
  data: () => ({
    title: "Swipper Slide",
    routes: [
      {
        title: "Swipper",
        disabled: false,
        href: "/swipper",
      },
    ],
  }),
};
</script>

<style scoped>
.mb {
  margin-bottom: 15px;
}
.main-bg {
  background-color: rgb(227, 227, 221);
  height: 100%;
}
.margin {
  margin-top: 29%;
}
</style>
