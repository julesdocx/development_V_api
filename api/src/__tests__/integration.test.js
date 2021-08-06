const supertest = require("supertest");
const app = require("../index");
const request = supertest(app);

describe("Performs GET Request: /api/users/get", () => {
    it("Responds with status:200 and returns an array[] of all {users}", async (done) => {
        try {
            const response = await request.get("/api/users/get");
            expect(response.status).toBe(200);
            expect(response.body).not.toBeUndefined();
            done();
        } catch (error) {}
    });
});

describe("Performs POST Request: /api/users/post, with a unique BODY.username, BODY.email", () => {
    it("Responds with status:200 and returns status:200", async (done) => {
        try {
            const response = await request.post("/api/users/post").send({user: {username: 'testPerson', email: 'test@email.com'}});            expect(response.status).toBe(200);
            expect(response.status).toBe(200);
            done();
        } catch (error) {}
    });
});

