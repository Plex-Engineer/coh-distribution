async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
    
    const Distribute = await ethers.getContractFactory("Distribute");
    const distribute = await Distribute.deploy();
  
    console.log("Distribute Contract Address:", distribute.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });