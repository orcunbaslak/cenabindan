async function main() {
    const Cenabindan = await ethers.getContractFactory("Cenabindan")
  
    // Start deployment, returning a promise that resolves to a contract object
    const Cenabindan = await Cenabindan.deploy()
    await Cenabindan.deployed()
    console.log("Contract deployed to address:", Cenabindan.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  