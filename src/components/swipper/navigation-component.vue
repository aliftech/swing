<template>
  <v-card>
    <v-card-title>Navigation Component</v-card-title>
    <v-container>
      <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </swiper-slide>
      </swiper>
    </v-container>
  </v-card>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
