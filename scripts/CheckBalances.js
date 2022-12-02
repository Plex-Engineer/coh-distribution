async function main() {
    const [deployer] = await ethers.getSigners();

    // attach to contract
    const Distribute = await ethers.getContractFactory("Distribute");
    const distribute = await Distribute.attach("0xBCE2d0f56FE06988Fd06494537E039F5CdCED1a8");

    console.log("Canto Messenger balance: ", await ethers.provider.getBalance("0x61720DAF21641487e7CC3C71dd3583b8cE2B8d0A"));
    console.log("Bamboo balance: ", await ethers.provider.getBalance("0xCA0Ef5A0AC9323E7f9ba5D417F9Bb173470B495C"));
    console.log("Canto Tools balance: ", await ethers.provider.getBalance("0xeDa724Ad752BDa46117a4Fb0558D537910fC71f3"));
    console.log("Cantillionaires balance: ", await ethers.provider.getBalance("0x9e884f11F96b0dd527a6e267B344927338acE6d9"));
    console.log("Canto.sh balance: ", await ethers.provider.getBalance("0x264217b2B74C1B3d85c199226c93Dd341377443c"));
    console.log("Carbon balance: ", await ethers.provider.getBalance("0x2e2407BF0220c2EB7D1F180A8eF43A8cC7939E4B"));
    console.log("\n\n");

    // check balance of contract before calling distribute 
    const balance = await distribute.getBalance();
    console.log("Balance of distribution contract: ", balance);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });