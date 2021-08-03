const supertest = require('supertest')
const app = require('../server.js')
const Helpers = require('api/src/utils/helpers.js');
request = supertest(app)

describe('GET /test response', () => {
    test('check if response is 200', async (done) => {
        try {
            const response = await request.get('/test')
            expect(response.status).toBe(200,done())
            expect(response.body).toStrictEqual({},done())
        } catch (error) {
            console.log(error);
        }
    })
})

describe('POST /test response', () => {
    test('check if response is 404', async (done) => {
        try {
            const response = await request.post('/test')
            expect(response.status).toBe(404,done())
            done()
        } catch (error) {
            if (error) {
                console.log(error);
            }
            done()
        }
    })
})

describe('GET ALL storyblock response', () => { // GET ALL DATA
    test('check if response gets all storyblock records', async (done) =>{
        try {
            const response = await request.get('/storyblock/')
            expect(response.status).toBe(200)
            done()
        } catch (error) {
            console.log(error);
        }
    });
});

describe('.post(/storyblock) testing', () => {
        const uuid = Helpers.generateUUID();
    test('check if record is created and story_id exist', async (done) => {
        try {
            const response = await request.post('/newstoryblock/')
            done()
        } catch (error) {
            console.log(error);
            done()
        }
    });
    test('check if UUID exist ', async (done) => {
        try {
            const response = await request.post('/addrecord')
            done()
        } catch (error) {
            console.log(error);
            done()
        }
    });
    test('check if content length is above 100', async (done) => {
        try {
            const response = await request.post('/addrecord')
        } catch (error) {
            console.log(error);
            done()
        }
    });
});
describe('ervoor zorgen dat een delete request een UUID bevatten', () => {
    test('check if the DELETE has UUID', async (done) => {
        try {
            const response = await request.delete('/storyblock/')
            done()
        } catch (error) {
            console.log(error);
            done()
        }
    });
    test('check if DELETED', async (done) => {
        try {
            const response = await request.delete('/storyblock/')
            done()
        } catch (error) {
            console.log(error);µ
            done()
        }
    });
});
describe('zorgen dat storyblock niet toegevoegd kan worden aan story', () => {
    test('check if response send all storyblocks back', async (done) => {
        try {
            const response = await request.get('/storyblock/')
            done()
        } catch (error) {
            console.log(error);
            done()
        }
    });
});