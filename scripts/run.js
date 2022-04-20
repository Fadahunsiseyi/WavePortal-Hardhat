
const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners()
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log('Contract deployed to :', waveContract.address);
    console.log('Contract deployed to :', owner.address)

    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    let waveTnx = await waveContract.wave();
    await waveTnx.wait();
    waveCount = await waveContract.getTotalWaves();
    waveTnx = await waveContract.connect(randomPerson).wave();
    await waveTnx.wait();
    waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
      try {
          await main();
          process.exit(0);
      } catch(err){
          console.log(err);
          process.exit(1);
      }
}
runMain()