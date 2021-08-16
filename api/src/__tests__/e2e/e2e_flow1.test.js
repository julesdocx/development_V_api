
const supertest = require("supertest");
const app = require("../../index");
const request = supertest(app);

describe("User flow registration,make- get- update- delete activity, delete account", () => {
    let id;
    let storyId;
    it("user makes an account / Registers himself", async (done) => {
        try {
            const response = await request.post("/api/users/post").send({user: {username: 'testPerson2', email: 'test2@email.com'}});            
            id = response.text;
            console.log(id)
            expect(response.text).toBeDefined();
            expect(response.status).toBe(200);
            done();
        } catch (error) {
            console.log(error)
        }
    });

    it("user makes an activity", async (done) => {
        try {
            const response = await request.post("/api/activities/post").send({activity: {
                title: "title",
                date: "date",
                sport: "sport",
                duration: "duration",
                username: "username",
            }});
            expect(response.status).toBe(200);
            storyId = response.text
            done();
        } catch (error) {
            console.log(error)
        }
    });

    it("user retrieves all activities", async (done) => {
        try {
            const response = await request.get("/api/activities/get");
            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
            done();
        } catch (error) {
            console.log(error)
        }
    });

    it("user updates an activity", async (done) => {
        try {
            const response = await request.post("/api/activities/update").send({
                title: "*EDITTED* title",
                date: "date",
                sport: "sport",
                duration: "duration",
                username: "NEW USERNAME",
            });;
            expect(response.status).toBe(200);
            done();
        } catch (error) {
            console.log(error)
        }
    });

    it("user deletes an activity", async (done) => {
        try {
            const response = await request.delete(`/api/activities/delete/${storyId}`);
            expect(response.status).toBe(200);
            done();
        } catch (error) {
            console.log(error)
        }
    });

    it("User deletes his account", async (done) => {
        try {
            console.log(id);
            const response = await request.delete(`/api/users/delete/${id}`);            
            expect(response.text).toBeDefined();
            expect(response.status).toBe(200);
            done();
        } catch (error) {
            console.log(error)
        }
    });
});

