<template>
  <Carousel :items-to-show="1">
    <Slide v-for="slide in 10" :key="slide">
      {{ slide }}
    </Slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  }
}
</script>

<style>
.carousel__prev {
  border: 2px solid white;
}

.carousel__next {
  border: 2px solid white;
}

.carousel__icon {
  color: white;
}

.backimage {
  width: 100%;
  height: 100%;
}

.carousel {
  height: 100vh;
}

.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
  background-color: whitesmoke;
  height: 95%;
  display: flex;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
