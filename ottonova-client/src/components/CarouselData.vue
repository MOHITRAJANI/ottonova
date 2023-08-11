<template>
    <div>
        <h1  v-if="city.name != city.name_native" class="city-name">{{ city.name }} : {{city.name_native}}</h1>
        <h1  v-else class="city-name">{{ city.name }}</h1>
    </div>
    <div style="display: flex; justify-content: space-between;">
        <div class="details" style="margin-top: 180px; margin-left: 50px;" >
            <font-awesome-icon icon="fa-people-line" /> Population : {{ city.population }} <br>
                Founded: {{ city.founded }} <br>
        </div>
        <div class="details" style="margin-top: 150px; margin-right: 100px;">
                Country : {{ city.country }} <br>
                Continent: {{ city.continent }} <br>
                Latitude: {{ city.latitude }} <br>
                Longitude: {{ city.longitude }} <br>
        </div>
    </div>
    <div style="display: flex; flex-direction: row; gap: 20px; align-items: center; justify-content: center; margin-top: 100px; opacity: 0.9;">
        <template v-for="(landmarks, key) in city.landmarks" :key="key">
            <BCard
                v-if="imageUrls[landmarks]"
                :title="landmarks"
                :img-src="imageUrls[landmarks]"
                img-alt="Image"
                img-top
                tag="landmark"
                style="max-width: 20rem;"
                :data-testid="`landmark-${key}`"
            />
            <BCard
                v-else
                :title="landmarks"
                tag="landmark"
                style="max-width: 20rem;"
                :data-testid="`landmark-${key}`"
            />
        </template>
    </div>
</template>

<script>
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    name: 'CarouselData',
    props: ['city', 'imageUrls'],
}
</script>
<style>
/* 
  Styles for making height of all cards almost equal
*/
.card {
    max-height: 288px;
}
/* 
  Increase font wright for city name and add text shadow
*/
.city-name {
    font-size: 4.5rem;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white
}
/* 
  Styles for making font more appealing
*/
.details {
    font-size: 2.0rem;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
}
</style>