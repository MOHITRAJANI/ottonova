// utils import
import { test } from 'vitest'
import { render } from '@testing-library/vue'
import { describe } from 'vitest'

// component import
import  CarouselData  from '../src/components/CarouselData.vue'

describe('Carousel component tests', () => {
    const { getAllByTestId, getAllByText } = render(CarouselData, {
        props: {
            city: {
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
              },
              imageUrls: {
                "Sydney": "https://wallpapercave.com/wp/wp2209141.jpg",
                "Sydney Opera House":"https://www.tripsavvy.com/thmb/k39AA6dtCIbao7bsVyy5HDz7AJo=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/OperaHouse-755d893182dc4811b608eb1a99792fd7.jpg",
                "Sydney Harbour Bridge":"https://cdn.britannica.com/33/155133-050-962670B6/Sydney-Harbour-Bridge-Australia-Syndey.jpg",
                "Queen Victoria Building":"https://www.linkreit.com/-/media/linkreit/business/properties/queen-victoria-building/link-reit-business-properties-queen-victoria-building-01.jpg?mw=1000&rev=9355ce163e7b4209bd458ad4aa4a699b&hash=2C06C3D8FAE9E03D01ECB30172E680A5",
              }    
        }
    })

    test('all components present', () => {
        setTimeout(() => {
            getAllByText("Sydney")
            getAllByText("Population : 5312000")
            getAllByText("Country : Australia")
            getAllByText("Longitude: 151.209900")
            getAllByText("Continent: Australia")
            getAllByText("Latitude: -33.865143")
            getAllByText("Founded: 1788")
        }, 2000)
    })

    test('3 cards are present for landmarks', () => {
        setTimeout(() => {
          getAllByTestId('landmark-0')
          getAllByTestId('landmark-1')
          getAllByTestId('landmark-2')
        }, 2000)  
    })

    test("population icon is present", () => {
        setTimeout(() => {
            getAllByTestId("population-icon")
        }, 2000)
    })
})