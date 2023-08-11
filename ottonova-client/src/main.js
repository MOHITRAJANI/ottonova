// Basic setup
import { createApp } from 'vue'
import App from './App.vue'

// Library imports
import BootstrapVueNext from 'bootstrap-vue-next'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icon -people icon for population representation */
import { faPeopleLine } from '@fortawesome/free-solid-svg-icons'

/* add icon to the library */
library.add(faPeopleLine)


// CSS imports
import 'vue3-carousel/dist/carousel.css' // Carousel

// Bootstrap styles import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(BootstrapVueNext)
app.mount('#app')
