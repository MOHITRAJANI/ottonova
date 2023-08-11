const request = require('supertest')
const baseURL = "http://localhost:3000"

describe('Test cities api', () => {
    
    it("should return 200", async () => {
        const response = await request(baseURL).get("/cities")
        expect(response.statusCode).toBe(200)
        expect(response.ok).toBe(true)
        expect(response.error).toBe(false)
    })

    it("should return cities", async () => {
        const response = await request(baseURL).get('/cities')
        expect(response.body).not.toBe(null)
        expect(response.body.cities).not.toBe(null);
    })

    it("should return exactly 8 results", async () => {
        const response = await request(baseURL).get('/cities')
        expect(response.body.cities).toHaveLength(8)
    })
})


describe('Test imageUrls api',  () => {
    
    it("should return 200", async() => {
        const response = await request(baseURL).get("/imageUrl")
        expect(response.statusCode).toBe(200)
        expect(response.ok).toBe(true)
        expect(response.error).toBe(false)
    })

    it("should return image urls", async () => {
        const response = await request(baseURL).get('/imageUrl')
        expect(response.body).not.toBe(null)
    })

    it("should return exactly 32 results", async () => {
        const response = await request(baseURL).get('/imageUrl')
        expect(Object.keys(response.body)).toHaveLength(32)
    })
    
})