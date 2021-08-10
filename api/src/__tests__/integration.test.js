const supertest = require("supertest");
const app = require("../index");
const request = supertest(app);

describe("Performs GET Request: /api/users/get", () => {
    it("Responds with status:200 and returns an array[] of all {users}", async (done) => {
        try {
            const response = await request.get("/api/users/get");
            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
            done();
        } catch (error) {
            console.log(error)
        }
    });
});

describe("Performs POST Request: /api/users/post, with a unique BODY.username, BODY.email and DELETES it afterwords (and checks wether every corresponding activity is deleted)", () => {
    let id;
    it("Responds with textID and returns status:200", async (done) => {
        try {
            const response = await request.post("/api/users/post").send({user: {username: 'testPerson', email: 'test@email.com'}});            
            id = response.text;
            expect(response.text).toBeDefined();
            expect(response.status).toBe(200);
            done();
        } catch (error) {
            console.log(error)
        }
    });
    it("Responds with textID and returns status:200", async (done) => {
        try {
            const response = await request.delete(`/api/users/delete/${id}`);            
            expect(response.text).toBeDefined();
            expect(response.status).toBe(200);
            done();
        } catch (error) {
            console.log(error)
        }
    });
    it('should have deleted every corresponding activity of "testPerson"', (done) => {
        try {
            //const response = await request
        } catch (error) {
            //console.log(error)
        }
    });
});

