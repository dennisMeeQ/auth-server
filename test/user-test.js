const chai = require("chai");
const ZSchema = require("z-schema");
const supertest = require("supertest");

const validator = new ZSchema({});
const authUrl = process.env.AUTH_URL || "http://localhost:7474";
const api = supertest(authUrl); // supertest init;
const { expect } = chai;

const { userSchema, userArraySchema } = require("./testUtil/userSchemas");

describe("GET /user", () => {
  it("should respond with 200 & return a users array", done => {
    api
      .get("/user")
      // .set('Authorization', `JWT ${jwt}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(validator.validate(res.body, userArraySchema)).to.be.true;
        return done();
      });
  });
});

describe("GET /user/{userId}", () => {
  it("should respond with 200 & return a user", done => {
    const userId = "8f615328-5a21-4538-8a9b-d9e16a6cebd5";
    api
      .get(`/user/${userId}`)
      // .set('Authorization', `JWT ${jwt}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(validator.validate(res.body, userSchema)).to.be.true;
        expect(res.body.userId).to.equal(userId);
        return done();
      });
  });

  it("should respond with 404 if user does not exist", done => {
    const userId = "8f615328-5a21-4538-8a9b-d9e16a6ce666";
    api
      .get(`/user/${userId}`)
      // .set('Authorization', `JWT ${jwt}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(404);
        return done();
      });
  });
});
