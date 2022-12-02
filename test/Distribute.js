const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");


describe("Token contract", function () {
    async function deployTokenFixture() {
        // get contract factory and signer
        const Distribute = await ethers.getContractFactory("Distribute");
        const [owner] = await ethers.getSigners();
    
        // deploy contract
        const hardhatDistribute = await Distribute.deploy();
        await hardhatDistribute.deployed();
    
        // return objects for use in testing
        return { Distribute, hardhatDistribute, owner };
    }


  it("Send tokens to the distribution contract", async function () {
    const { hardhatDistribute, owner } = await loadFixture(deployTokenFixture);

    // ensure the contract has 0 ether at start
    const balance = await hardhatDistribute.getBalance();
    expect(balance).to.equal(0);


    // send ether to contract
    const transactionHash = await owner.sendTransaction({
        to: hardhatDistribute.address,
        value: ethers.utils.parseEther("300000.0"), // Sends exactly 1.0 ether
    });

    // check that contract received ether
    const balance2 = await hardhatDistribute.getBalance();
    expect(balance2).to.equal(ethers.utils.parseEther("300000.0"));
  });

  it("Call distribute using transfer on the contract", async function () { 
    const { hardhatDistribute, owner } = await loadFixture(deployTokenFixture);

    // send ether to contract
    const transactionHash = await owner.sendTransaction({
        to: hardhatDistribute.address,
        value: ethers.utils.parseEther("300000.0"), 
    });

    // check balance to ensure contract received ether
    const balance = await hardhatDistribute.getBalance();
    expect(balance).to.equal(ethers.utils.parseEther("300000.0"));

    // call distribute function on contract
    const distributeFunction = await hardhatDistribute.distributeUsingTransfer();

    // check that contract has no ether left after distribution
    const balance2 = await hardhatDistribute.getBalance();
    expect(balance2).to.equal(ethers.utils.parseEther("0.0"));

    // check balances of addresses to ensure ether was delivered
    const cantoMessengerBalance = await ethers.provider.getBalance("0x61720DAF21641487e7CC3C71dd3583b8cE2B8d0A");
    expect(cantoMessengerBalance).to.equal(ethers.utils.parseEther("100000.0"));

    const bambooBalance = await ethers.provider.getBalance("0xCA0Ef5A0AC9323E7f9ba5D417F9Bb173470B495C");
    expect(bambooBalance).to.equal(ethers.utils.parseEther("40000.0"));

    const cantoToolsBalance = await ethers.provider.getBalance("0xeDa724Ad752BDa46117a4Fb0558D537910fC71f3");
    expect(cantoToolsBalance).to.equal(ethers.utils.parseEther("40000.0"));

    const cantillionairesBalance = await ethers.provider.getBalance("0x9e884f11F96b0dd527a6e267B344927338acE6d9");
    expect(cantillionairesBalance).to.equal(ethers.utils.parseEther("40000.0"));

    const cantoShBalance = await ethers.provider.getBalance("0x264217b2B74C1B3d85c199226c93Dd341377443c");
    expect(cantoShBalance).to.equal(ethers.utils.parseEther("40000.0"));

    const carbonBalance = await ethers.provider.getBalance("0x2e2407BF0220c2EB7D1F180A8eF43A8cC7939E4B");
    expect(carbonBalance).to.equal(ethers.utils.parseEther("40000.0"));
  });

  it("Call distribute using call on the contract", async function () { 
    const { hardhatDistribute, owner } = await loadFixture(deployTokenFixture);

    // send ether to contract
    const transactionHash = await owner.sendTransaction({
        to: hardhatDistribute.address,
        value: ethers.utils.parseEther("300000.0"), // Sends exactly 1.0 ether
    });

    // check balance to ensure contract received ether
    const balance = await hardhatDistribute.getBalance();
    expect(balance).to.equal(ethers.utils.parseEther("300000.0"));

    // call distribute function on contract
    const distributeFunction = await hardhatDistribute.distributeUsingCall();

    // check that contract has no ether left after distribution
    const balance2 = await hardhatDistribute.getBalance();
    expect(balance2).to.equal(ethers.utils.parseEther("0.0"));

     // check balances of addresses to ensure ether was delivered
     const cantoMessengerBalance = await ethers.provider.getBalance("0x61720DAF21641487e7CC3C71dd3583b8cE2B8d0A");
     expect(cantoMessengerBalance).to.equal(ethers.utils.parseEther("100000.0"));
 
     const bambooBalance = await ethers.provider.getBalance("0xCA0Ef5A0AC9323E7f9ba5D417F9Bb173470B495C");
     expect(bambooBalance).to.equal(ethers.utils.parseEther("40000.0"));
 
     const cantoToolsBalance = await ethers.provider.getBalance("0xeDa724Ad752BDa46117a4Fb0558D537910fC71f3");
     expect(cantoToolsBalance).to.equal(ethers.utils.parseEther("40000.0"));
 
     const cantillionairesBalance = await ethers.provider.getBalance("0x9e884f11F96b0dd527a6e267B344927338acE6d9");
     expect(cantillionairesBalance).to.equal(ethers.utils.parseEther("40000.0"));
 
     const cantoShBalance = await ethers.provider.getBalance("0x264217b2B74C1B3d85c199226c93Dd341377443c");
     expect(cantoShBalance).to.equal(ethers.utils.parseEther("40000.0"));
 
     const carbonBalance = await ethers.provider.getBalance("0x2e2407BF0220c2EB7D1F180A8eF43A8cC7939E4B");
     expect(carbonBalance).to.equal(ethers.utils.parseEther("40000.0"));
  });
});