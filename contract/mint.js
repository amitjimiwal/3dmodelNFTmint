const { Web3 } = require("web3");
// Replace with your own contract address and ABI
const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; //Your contract Address
const contractABI = "Your contract ABI";
const providerUrl = "http://127.0.0.1:8545/";
const fileCID = "ipfs://<Your file hash>";
async function mint3DModelNFT(tokenURI) {
  try {
    const web3 = new Web3(Web3.givenProvider || providerUrl);

    // Use one of the accounts provided by the local node (e.g., Ganache or Hardhat)
    const accounts = await web3.eth.getAccounts();
    const sender = accounts[0];
    // const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    // const sender = account.address;
    // Create a contract instance
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Call the function on the contract
    const tx = await contract.methods
      .mint3DModelNFT(sender, tokenURI)
      .send({ from: sender });
    console.log("Transaction sent:", tx.transactionHash);

    // Wait for the transaction to be mined
    const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
    console.log("Transaction mined:", receipt.transactionHash);

    // Get the tokenId
    const tokenId = receipt.logs[0].topics[3];
    console.log(
      "NFT minted with tokenId:",
      web3.utils.hexToNumberString(tokenId)
    );
  } catch (error) {
    console.error("Error minting NFT:", error);
  }
}


mint3DModelNFT(fileCID);
