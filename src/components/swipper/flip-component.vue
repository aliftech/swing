<template>
  <v-card>
    <v-card-title>Flip Effect Component</v-card-title>
    <v-container>
      <swiper
        :effect="'flip'"
        :grabCursor="true"
        :pagination="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
        ><swiper-slide
          ><img src="https://swiperjs.com/demos/images/nature-6.jpg"
        /></swiper-slide>
      </swiper>
    </v-container>
  </v-card>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFlip, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 300px;
  height: 300px;
  padding: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
