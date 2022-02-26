const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Greeter2", function () {
  it("Should return greetingV1", async function () {
    const Greeter1 = await ethers.getContractFactory("GreeterV1");
    const greeter1 = await upgrades.deployProxy(Greeter1, [], {
      initializer: "initialize",
    });
    await greeter1.deployed();

    const Greeter2 = await ethers.getContractFactory("GreeterV2");
    const greeter2 = await upgrades.upgradeProxy(greeter1.address, Greeter2);
    await greeter2.deployed();

    expect(await greeter2.helloV1()).to.equal("Hello, V1 World!");
  });
  it("Should return greetingV1 with returnV1StateFromV2", async function () {
    const Greeter1 = await ethers.getContractFactory("GreeterV1");
    const greeter1 = await upgrades.deployProxy(Greeter1, [], {
      initializer: "initialize",
    });
    await greeter1.deployed();

    const Greeter2 = await ethers.getContractFactory("GreeterV2");
    const greeter2 = await upgrades.upgradeProxy(greeter1.address, Greeter2);
    await greeter2.deployed();

    expect(await greeter2.returnV1StateFromV2()).to.equal("Hello, V1 World!");
  });
  it("Should return greetingV2", async function () {
    const Greeter1 = await ethers.getContractFactory("GreeterV1");
    const greeter1 = await upgrades.deployProxy(Greeter1, [], {
      initializer: "initialize",
    });
    await greeter1.deployed();

    const Greeter2 = await ethers.getContractFactory("GreeterV2");
    const greeter2 = await upgrades.upgradeProxy(greeter1.address, Greeter2);
    await greeter2.deployed();

    expect(await greeter2.helloV2()).to.equal("Hello, V2 World!");
  });
});
