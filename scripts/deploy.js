const hre = require('hardhat');

async function main() {

    const PriceExperiment = await hre.ethers.getContractFactory("VRFv2Consumer");
    const priceExperiment = await PriceExperiment.deploy(1128);

    console.log("Contract address:", priceExperiment.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });