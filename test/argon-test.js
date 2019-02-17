const chai = require("chai");

const { expect } = chai;

const argonService = require("../src/services/argon");

describe("Argon hash", () => {
  it("should have the correct format", async () => {
    const hash = await argonService.generateHash("Password1");
    expect(hash).to.be.not.empty;

    const parts = hash.split("$");
    expect(parts.length).to.equal(6);
    expect(parts[1]).to.match(/^argon/);
  });

  it("should match hashed password", async () => {
    const password = "Password1";
    const hash = await argonService.generateHash(password);

    const user = { password: hash };
    const matches = await argonService.isPasswordCorrectForUser(user, password);

    expect(matches).to.be.true;
  });

  it("should not match incorrect password", async () => {
    const password = "Password1";
    const hash = await argonService.generateHash(password);

    const user = { password: hash };
    const matches = await argonService.isPasswordCorrectForUser(
      user,
      "AnotherPassword"
    );

    expect(matches).to.be.false;
  });

  it("should not match null password", async () => {
    const password = "Password1";
    const hash = await argonService.generateHash(password);

    const user = { password: hash };
    const matches = await argonService.isPasswordCorrectForUser(user, null);

    expect(matches).to.be.false;
  });

  it("should not match invalid hash", async () => {
    const password = "Password1";
    const hash = await argonService.generateHash(password);

    const invalidHash = hash.slice(0, hash.length - 2);
    const user = { password: invalidHash };
    const matches = await argonService.isPasswordCorrectForUser(user, password);

    expect(matches).to.be.false;
  });
});
