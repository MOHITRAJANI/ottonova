// utils import
import { test } from 'vitest'
import { render } from '@testing-library/vue'
import { describe } from 'vitest'

// component import
import  App  from '../src/App.vue'

describe("App tests", () => {
  const { getAllByTestId, getAllByText } = render(App, {
    data() {
      return {
        cities: [{
          "name": "Sydney",
          "name_native": "Sydney",
          "country": "Australia",
          "continent": "Australia",
          "latitude": "-33.865143",
          "longitude": "151.209900",
          "population": "5312000",
          "founded": "1788",
          "landmarks": [
            "Sydney Opera House",
            "Sydney Harbour Bridge",
            "Queen Victoria Building"
          ]
        }],
        imageUrls: []
      }
      }
    }) 
  
  test('contains children with data-test-id as slide-0 when cities is not empty', () => {
    getAllByTestId('slide-0')  
    getAllByText('Arrow pointing to the left')
    getAllByText('Arrow pointing to the right')
  })

  //  timeout is required because vue3-carousel library is attaching the components using vanillaJS and it takes time to perform DOM manipulation  
  test('Navigation buttons are present', () => {
    setTimeout(() => {
      getAllByText('Sydney')
    }, 3000)
  })

  test('all the data for the provided city is present', async () => {
    setTimeout(() => {
      getAllByText("Sydney")
      getAllByText("Population : 5312000")
      getAllByText("Country : Australia")
      getAllByText("Longitude: 151.209900")
      getAllByText("Continent: Australia")
      getAllByText("Latitude: -33.865143")
      getAllByText("Founded: 1788")
    }, 3000)
    
  })

  test('3 cards are present for landmarks', () => {
    setTimeout(() => {
      getAllByTestId('landmark-0')
      getAllByTestId('landmark-1')
      getAllByTestId('landmark-2')
    }, 3000)  
  })
})
