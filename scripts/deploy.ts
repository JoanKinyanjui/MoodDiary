import { ethers } from "hardhat";

async function main() {
 const [deployer] = await ethers.getSigners();
 console.log('Deploying contracts with Account :' , deployer.address);

 const moodContract =  await ethers.deployContract('MoodDiary');
 const address = await moodContract.getAddress();
 console.log('Mood Contract addresss : ' , address)
}


main().then(() => {
  console.error("Successfully Deployed Contract");
  process.exit(0)
})
.catch((error)=> {
  console.log(error)
  process.exit(1)
})

