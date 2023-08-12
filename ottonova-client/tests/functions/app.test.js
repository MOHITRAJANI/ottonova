// utils import
import { test } from 'vitest'
import { mount } from '@vue/test-utils'
// import { render } from '@testing-library/vue'
import { describe } from 'vitest'

// component import
import  App  from '../../src/App.vue'
import { expect } from 'vitest'

const CITIES = [
    {
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
    {
      "name": "New York City",
      "name_native": "New York City",
      "country": "USA",
      "continent": "North America",
      "latitude": "40.730610",
      "longitude": "-73.935242",
      "population": "8419000",
      "founded": "1624",
      "landmarks": [
        "Chrysler Building",
        "Brooklyn Bridge",
        "Madison Square Garden"
      ]
    },
    {
      "name": "Madrid",
      "name_native": "Madrid",
      "country": "Spain",
      "continent": "Europe",
      "latitude": "40.416775",
      "longitude": "-3.703790",
      "population": "3223000",
      "founded": "1083",
      "landmarks": [
        "Royal Palace",
        "Plaza Mayor",
        "Plaza de Cibeles"
      ]
    },
    {
      "name": "Moscow",
      "name_native": "Москва",
      "country": "Russia",
      "continent": "Europe",
      "latitude": "55.751244",
      "longitude": "37.618423",
      "population": "11920000",
      "founded": "1147",
      "landmarks": [
        "Saint Basil's Cathedral",
        "Kremlin",
        "Bolshoi Theatre"
      ]
    },
    {
      "name": "Tokyo",
      "name_native": "東京",
      "country": "Japan",
      "continent": "Asia",
      "latitude": "35.652832",
      "longitude": "139.839478",
      "population": "13960000",
      "founded": "1603",
      "landmarks": [
        "Meji Shrine",
        "Asakusa",
        "Tokyo Skytree"
      ]
    },
    {
      "name": "Lagos",
      "name_native": "Lagos",
      "country": "Nigeria",
      "continent": "Africa",
      "latitude": "6.465422",
      "longitude": "3.406448",
      "population": "14800000",
      "founded": "1914",
      "landmarks": [
        "Iga Idungaran",
        "Freedom Park",
        "The Cathedral Church of Christ"
      ]
    },
    {
      "name": "Sao Paulo",
      "name_native": "São Paulo",
      "country": "Brazil",
      "continent": "South America",
      "latitude": "-23.533773",
      "longitude": "-46.625290",
      "population": "12330000",
      "founded": "1554",
      "landmarks": [
        "Mosteiro De Sao Bento",
        "Italian Building",
        "Farol Santander"
      ]
    },
    {
      "name": "Munich",
      "name_native": "München",
      "country": "Germany",
      "continent": "Europe",
      "latitude": "48.137154",
      "longitude": "11.576124",
      "population": "1472000",
      "founded": "1158",
      "landmarks": [
        "Bavaria statue",
        "Marienplatz",
        "ottonova office"
      ]
    }
] 

const IMAGEURLS = 
    {
        "Sydney": "https://wallpapercave.com/wp/wp2209141.jpg",
        "New York City": "https://wallpaperaccess.com/full/123346.jpg", 
        "Madrid": "https://images.alphacoders.com/721/721616.jpg",
        "Moscow": "https://wallpaperaccess.com/full/1388818.jpg",
        "Tokyo": "https://wallpaper.dog/large/5567376.jpg",
        "Lagos": "https://www.lelongweekend.com/wp-content/uploads/2022/01/DSC09980.jpg",
        "Sao Paulo": "https://images.unsplash.com/photo-1583788758158-7a28a8c989ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FvJTIwcGF1bG98ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        "Munich":"https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVuaWNofGVufDB8fDB8fHww&w=1000&q=80",
        "Sydney Opera House":"https://www.tripsavvy.com/thmb/k39AA6dtCIbao7bsVyy5HDz7AJo=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/OperaHouse-755d893182dc4811b608eb1a99792fd7.jpg",
        "Sydney Harbour Bridge":"https://cdn.britannica.com/33/155133-050-962670B6/Sydney-Harbour-Bridge-Australia-Syndey.jpg",
        "Queen Victoria Building":"https://www.linkreit.com/-/media/linkreit/business/properties/queen-victoria-building/link-reit-business-properties-queen-victoria-building-01.jpg?mw=1000&rev=9355ce163e7b4209bd458ad4aa4a699b&hash=2C06C3D8FAE9E03D01ECB30172E680A5",
        "Chrysler Building": "https://robinrcutler.com/wp-content/uploads/2011/11/nyc-chrysler-building-skyline-1930.jpg",
        "Brooklyn Bridge":"https://triptins.com/wp-content/uploads/2020/12/Brooklyn-Bridge-Walk.jpeg.webp",
        "Madison Square Garden":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/01/ee/69/madison-square-garden.jpg?w=1200&h=-1&s=1",
        "Royal Palace": "https://as1.ftcdn.net/v2/jpg/05/29/41/34/1000_F_529413411_yF02uvyMiZbuepuHWNKpcv9zihIJVL9Q.jpg",
        "Plaza Mayor": "https://watermark.lovepik.com/photo/20211125/large/lovepik-plaza-madrid-madrid-picture_501010230.jpg",
        "Plaza de Cibeles":"https://storage.googleapis.com/ttb-public-storage/28425/conversions/800px-Plaza_de_Cibeles,_Madrid,_Spain_Qmin-medium.jpg",
        "Saint Basil's Cathedral": "https://images.squarespace-cdn.com/content/v1/56abb4fe69a91abc2355fb93/1548652430941-IAMGAOFAQ08J54L28WIO/St.+Basil%27s+Cathedral+Front.jpg?format=1000w",
        "Kremlin": "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a3JlbWxpbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        "Bolshoi Theatre":"https://thumbs.dreamstime.com/b/bolshoi-theatre-big-theater-night-moscow-russia-bolshoi-theatre-big-theater-night-moscow-russia-118587735.jpg",
        "Meji Shrine": "https://static.toiimg.com/photo/55975839.cms",
        "Asakusa": "https://images.unsplash.com/photo-1580167227251-be70f01b0c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXNha3VzYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        "Tokyo Skytree":"https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2014/12/skytree-view-1-1024x682.jpg",
        "Iga Idungaran": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f7/e9/59/iga-idungaran.jpg?w=1200&h=-1&s=1",
        "Freedom Park": "https://i0.wp.com/430779ae203f.xneelosites.com/wp-content/uploads/2017/02/Freedom-Park-6070.jpg",
        "The Cathedral Church of Christ":"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/izcxlimz2jbyo4l8diib/Christ%20Church%20Cathedral%20Ticket%20in%20Dublin.jpg",
        "Mosteiro De Sao Bento": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mosteiro_de_S%C3%A3o_Bento_01.jpg/1200px-Mosteiro_de_S%C3%A3o_Bento_01.jpg",
        "Italian Building": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/59/b8/d7/vista-externa.jpg?w=1200&h=-1&s=1",
        "Farol Santander": "https://cidadedesaopaulo.com/wp-content/uploads/2018/01/Banespa-Altino-Arantes_0611_Foto-Caio-Pimenta_90-1.jpg",
        "Bavaria statue": "https://live.staticflickr.com/65535/50575078476_5049a59b65_b.jpg",
        "Marienplatz": "https://plus.unsplash.com/premium_photo-1661886457733-2d936843cd70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFyaWVucGxhdHp8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        "ottonova office": "https://cdn.dribbble.com/uploads/3742/original/data?1559895505"
    }


describe("App tests", () => {
  const wrapper = mount(App, {
    data() {
      return {
        cities: [],
        imageUrls: []
      }
      }
    }) 
  
    test('test getCities function', async () => {
        expect(wrapper.vm.cities.length).toBe(0)
        await wrapper.vm.getCities()
        expect(wrapper.vm.cities.length).toBe(8)    
    })

    test('compare actual cities content with cities.json', async () => {
        expect(wrapper.vm.cities).to.deep.equal(CITIES)

    })

    test('test setBackgroundImages function', async () => {
        await wrapper.vm.setBackgroundImages()
        expect(Object.keys(wrapper.vm.imageUrls).length).toBe(32)    
    })

    test('compare actual imageUrls content with images.json', async () => {
        expect(wrapper.vm.imageUrls).to.deep.equal(IMAGEURLS)    
    })
})