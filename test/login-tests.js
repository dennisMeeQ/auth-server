const chai = require("chai");
const supertest = require("supertest");

const authUrl = process.env.AUTH_URL || "http://localhost:7474";
const api = supertest(authUrl); // supertest init;
const { expect } = chai;

const validUser = {
  username: "dst",
  password: "Password1"
};
const wrongPwUser = {
  username: "dst",
  password: "wrongpassword"
};
const nonExUser = {
  username: "doesnotexists",
  password: "Password1"
};

describe("Login POST /auth/login", () => {
  it("should respond with 200 & return a token", done => {
    api
      .post("/auth/login")
      .send(`username=${validUser.username}&password=${validUser.password}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body).to.be.not.empty;
        expect(res.body.token).to.be.not.empty;
        return done();
      });
  });

  it("should respond with 401 if user does not exist", done => {
    api
      .post("/auth/login")
      .send(`username=${nonExUser.username}&password=${nonExUser.password}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(401);
        expect(res.body.token).not.to.exist;
        return done();
      });
  });

  it("should respond with 401 if wrong password provided", done => {
    api
      .post("/auth/login")
      .send(`username=${wrongPwUser.username}&password=${wrongPwUser.password}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(401);
        expect(res.body.token).not.to.exist;
        return done();
      });
  });
});
