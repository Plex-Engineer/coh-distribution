async function main() {
    const [deployer] = await ethers.getSigners();

    // attach to contract
    const Distribute = await ethers.getContractFactory("Distribute");
    const distribute = await Distribute.attach("0x18774317c71117de18df4F4c4E508DfDcb33050b");

    console.log("Longnecks balance: ", await ethers.provider.getBalance("0x0189402Fa964da3f5C59C81aF192CD4b2a29973B"));
    console.log("CNS balance: ", await ethers.provider.getBalance("0x2bE8F7A8EfF738aFCD688Af4D3DD314164065760"));
    console.log("Cantoswap balance: ", await ethers.provider.getBalance("0xF39eEe4F21359e78A30D992e0b2D7fEAAe5c97Ff"));
    console.log("Magnet balance: ", await ethers.provider.getBalance("0x6dC370451ad0C5a6Bcb4F1618BbbbfF1DC40b42a"));
    console.log("Kanto balance: ", await ethers.provider.getBalance("0x2e2407BF0220c2EB7D1F180A8eF43A8cC7939E4B"));
    console.log("Prompt balance: ", await ethers.provider.getBalance("0x810be8A5C6b6b38A7c1530F9E0b81f47CEF92b25"));
    console.log("Thoth balance: ", await ethers.provider.getBalance("0xA779fC675Db318dab004Ab8D538CB320D0013F42"));
    console.log("Y2R balance: ", await ethers.provider.getBalance("0x73d9312A7C47a25C18E27E94160034ac7AE99576"));
    console.log("\n\n");

    console.log("Calling contract Distribute at address: ", distribute.address);
    console.log("\n\n");


    // check balance of contract before calling distribute 
    const balance = await distribute.getBalance();
    console.log("Balance before calling distribute: ", balance);
    console.log("\n\n");


    // call distribute
    const distributeFunction = await distribute.distributeUsingTransfer();

    // check balance of contract after calling distribute 
    const balance2 = await distribute.getBalance();
    console.log("Balance after calling distribute: ", balance2);
    console.log("\n\n");

    console.log("Longnecks balance: ", await ethers.provider.getBalance("0x0189402Fa964da3f5C59C81aF192CD4b2a29973B"));
    console.log("CNS balance: ", await ethers.provider.getBalance("0x2bE8F7A8EfF738aFCD688Af4D3DD314164065760"));
    console.log("Cantoswap balance: ", await ethers.provider.getBalance("0xF39eEe4F21359e78A30D992e0b2D7fEAAe5c97Ff"));
    console.log("Magnet balance: ", await ethers.provider.getBalance("0x6dC370451ad0C5a6Bcb4F1618BbbbfF1DC40b42a"));
    console.log("Kanto balance: ", await ethers.provider.getBalance("0x2e2407BF0220c2EB7D1F180A8eF43A8cC7939E4B"));
    console.log("Prompt balance: ", await ethers.provider.getBalance("0x810be8A5C6b6b38A7c1530F9E0b81f47CEF92b25"));
    console.log("Thoth balance: ", await ethers.provider.getBalance("0xA779fC675Db318dab004Ab8D538CB320D0013F42"));
    console.log("Y2R balance: ", await ethers.provider.getBalance("0x73d9312A7C47a25C18E27E94160034ac7AE99576"));
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });