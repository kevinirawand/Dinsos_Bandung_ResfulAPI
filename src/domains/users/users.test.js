import request from "supertest";
import { userSignUpHandler } from "./users-controller.js";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
   res.send("THIS /users");
});
app.post("/signup", userSignUpHandler);

test("User Test", async () => {
   const response = await request(app).get("/");
   expect(response.text).toBe("THIS /users");
});

test("/signup TEST", async () => {
   const response = await request(app).post("/signup").send({
      usernam: 'kevinid_test_JSON'
   });

   // expect(response.body).toEqual({ username: 'kevinid' });
   expect(response.statusCode).toBe(200);
})