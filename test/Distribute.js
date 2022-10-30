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
        value: ethers.utils.parseEther("299999.99"), 
    });

    // check balance to ensure contract received ether
    const balance = await hardhatDistribute.getBalance();
    expect(balance).to.equal(ethers.utils.parseEther("299999.99"));

    // call distribute function on contract
    const distributeFunction = await hardhatDistribute.distributeUsingTransfer();

    // check that contract has no ether left after distribution
    const balance2 = await hardhatDistribute.getBalance();
    expect(balance2).to.equal(ethers.utils.parseEther("0.0"));

    // check balances of addresses to ensure ether was delivered
    const longnecksBalance = await ethers.provider.getBalance("0x0189402Fa964da3f5C59C81aF192CD4b2a29973B");
    expect(longnecksBalance).to.equal(ethers.utils.parseEther("100000.0"));

    const cnsBalance = await ethers.provider.getBalance("0x2bE8F7A8EfF738aFCD688Af4D3DD314164065760");
    expect(cnsBalance).to.equal(ethers.utils.parseEther("40000.0"));

    const cantoswapBalance = await ethers.provider.getBalance("0xF39eEe4F21359e78A30D992e0b2D7fEAAe5c97Ff");
    expect(cantoswapBalance).to.equal(ethers.utils.parseEther("40000.0"));

    const magnetBalance = await ethers.provider.getBalance("0x6dC370451ad0C5a6Bcb4F1618BbbbfF1DC40b42a");
    expect(magnetBalance).to.equal(ethers.utils.parseEther("40000.0"));

    const kantoBalance = await ethers.provider.getBalance("0x2e2407BF0220c2EB7D1F180A8eF43A8cC7939E4B");
    expect(kantoBalance).to.equal(ethers.utils.parseEther("40000.0"));

    const promptBalance = await ethers.provider.getBalance("0x810be8A5C6b6b38A7c1530F9E0b81f47CEF92b25");
    expect(promptBalance).to.equal(ethers.utils.parseEther("13333.33"));

    const thothBalance = await ethers.provider.getBalance("0xA779fC675Db318dab004Ab8D538CB320D0013F42");
    expect(thothBalance).to.equal(ethers.utils.parseEther("13333.33"));

    const y2rBalance = await ethers.provider.getBalance("0x73d9312A7C47a25C18E27E94160034ac7AE99576");
    expect(y2rBalance).to.equal(ethers.utils.parseEther("13333.33"));
  });

  it("Call distribute using call on the contract", async function () { 
    const { hardhatDistribute, owner } = await loadFixture(deployTokenFixture);

    // send ether to contract
    const transactionHash = await owner.sendTransaction({
        to: hardhatDistribute.address,
        value: ethers.utils.parseEther("299999.99"), // Sends exactly 1.0 ether
    });

    // check balance to ensure contract received ether
    const balance = await hardhatDistribute.getBalance();
    expect(balance).to.equal(ethers.utils.parseEther("299999.99"));

    // call distribute function on contract
    const distributeFunction = await hardhatDistribute.distributeUsingCall();

    // check that contract has no ether left after distribution
    const balance2 = await hardhatDistribute.getBalance();
    expect(balance2).to.equal(ethers.utils.parseEther("0.0"));

     // check balances of addresses to ensure ether was delivered
     const longnecksBalance = await ethers.provider.getBalance("0x0189402Fa964da3f5C59C81aF192CD4b2a29973B");
     expect(longnecksBalance).to.equal(ethers.utils.parseEther("100000.0"));
 
     const cnsBalance = await ethers.provider.getBalance("0x2bE8F7A8EfF738aFCD688Af4D3DD314164065760");
     expect(cnsBalance).to.equal(ethers.utils.parseEther("40000.0"));
 
     const cantoswapBalance = await ethers.provider.getBalance("0xF39eEe4F21359e78A30D992e0b2D7fEAAe5c97Ff");
     expect(cantoswapBalance).to.equal(ethers.utils.parseEther("40000.0"));
 
     const magnetBalance = await ethers.provider.getBalance("0x6dC370451ad0C5a6Bcb4F1618BbbbfF1DC40b42a");
     expect(magnetBalance).to.equal(ethers.utils.parseEther("40000.0"));
 
     const kantoBalance = await ethers.provider.getBalance("0x2e2407BF0220c2EB7D1F180A8eF43A8cC7939E4B");
     expect(kantoBalance).to.equal(ethers.utils.parseEther("40000.0"));
 
     const promptBalance = await ethers.provider.getBalance("0x810be8A5C6b6b38A7c1530F9E0b81f47CEF92b25");
     expect(promptBalance).to.equal(ethers.utils.parseEther("13333.33"));
 
     const thothBalance = await ethers.provider.getBalance("0xA779fC675Db318dab004Ab8D538CB320D0013F42");
     expect(thothBalance).to.equal(ethers.utils.parseEther("13333.33"));
 
     const y2rBalance = await ethers.provider.getBalance("0x73d9312A7C47a25C18E27E94160034ac7AE99576");
     expect(y2rBalance).to.equal(ethers.utils.parseEther("13333.33"));
  });
});