<template>
  <div>
    <v-container>
      <titlebarComponent
        :title="title"
        :routes="routes"
        class="mb"
      ></titlebarComponent>
      <v-row>
        <v-col lg="6" sm="12">
          <defaultComponentVue></defaultComponentVue>
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
export default {
  components: {
    titlebarComponent,
    myFooter,
    defaultComponentVue,
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
