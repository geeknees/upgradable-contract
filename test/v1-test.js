const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Greeter", function () {
  it("Should return greetingV1", async function () {
    const Greeter = await ethers.getContractFactory("GreeterV1");
    const greeter = await upgrades.deployProxy(Greeter, [], {
      initializer: "initialize",
    });
    await greeter.deployed();

    expect(await greeter.helloV1()).to.equal("Hello, V1 World!");
  });
});
