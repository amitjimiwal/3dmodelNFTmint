const hre = require("hardhat");

async function main() {
    const My3DModelNFT = await hre.ethers.getContractFactory("My3DModelNFT");
    const my3DModelNFT = await My3DModelNFT.deploy();
    await my3DModelNFT.deployed();

    console.log("My3DModelNFT deployed to:", my3DModelNFT.address);
}
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
});
