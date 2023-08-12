<template>
   <Carousel v-if="cities && cities.length > 0" :itemsToShow="1" :wrapAround="true" :transition="500">
    <Slide v-for="(city, key) in cities" :key="key"  :data-testid="`slide-${key}`">
      <div class="backimage" :style="{background: `url(${imageUrls[city.name]}) no-repeat center center fixed`, backgroundSize: 'cover', opacity: 0.9}">
        <div class="carousel__item">
          <CarouselData :city="city" :imageUrls="imageUrls" />
        </div>  
    </div>
    </Slide>
    <template #addons>
      <navigation/>
      <pagination />
    </template>
  </Carousel>
</template>

<script>
import axios from 'axios'

// Import external components 
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import CarouselData from './components/CarouselData.vue'
export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    CarouselData
  },
  data() {
    return {
      cities: [],
      imageUrls: []
    }
  }, 
  methods: {
        // Fetch all cities from backend api
        async getCities() {
            await axios.get('http://localhost:3000/cities').then((res) => {
                this.cities = res.data.cities
            }).catch((error) => alert(`Error: ${error}`))
        },
        
        // Fetch list of imageUrls from backend for every image.
        async setBackgroundImages() {
            await axios.get(`http://localhost:3000/imageUrl`).then(res => {
              this.imageUrls = res.data
              console.log("this.imageUrls ", this.imageUrls)
          }).catch((error) => {
            alert(`Error: ${error}`)
          })
        }
    },
    mounted() {
        this.getCities()
        this.setBackgroundImages()
    },
}
</script>

<style>

/* 
  Styles for background color of entire app
*/
#app {
  background-color: burlywood;
}

/* 
  Styles for background image div
*/
.backimage {
  width: 100%;
  height: 100%;
}

/* 
  Styles for carousel
*/
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
