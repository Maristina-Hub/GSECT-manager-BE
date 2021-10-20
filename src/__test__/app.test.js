import supertest from "supertest";
import app from "../server.js";

const request = supertest(app);

<<<<<<< HEAD
it("get route", async () => {
  const response = await request.get("/");
  expect(200);
  expect(response.body.message).toBe("Welcome to our GSECT-MAMAGER App.");
=======
it('get route', async () => {
    const response = await request.get('/');
    expect(200);
    expect(response.body.message).toBe('Welcome to our GSECT-MAMAGER App.');
>>>>>>> refs/remotes/origin/feature
});
