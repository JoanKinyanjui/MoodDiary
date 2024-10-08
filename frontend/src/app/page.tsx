"use client"
import MainPage from "@/components/MainPage";
import {useEffect, useRef, useState } from "react";
import Web3Modal from 'web3modal';
import {ethers} from 'ethers';
import {abi} from "@/constants/abi";

export default function Home() {
  const [mood, setMood] = useState<string>('');
  const [walletConnected, setWalletConnected] = useState<boolean>(false);
  const [connecting,setConnecting] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [transactionStatus,setTransactionStatus] = useState<string>('Pick a mood')
  const web3ModalRef = useRef<Web3Modal>();
  const contractAddress:string = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

  const getProviderOrSigner = async(needSigner:boolean = false)=>{
    setConnecting(true);
  try{
    const provider = await web3ModalRef.current?.connect();
    const web3Provider = new ethers.BrowserProvider(provider)

    
    let {chainId} = await web3Provider.getNetwork();
    console.log(chainId)
  

   const signer = await web3Provider.getSigner();
   const _address  = await signer.getAddress();
   setAddress(_address);

   if(needSigner){
    return signer;
   }
   return web3Provider;

  }catch{

  }
  }

  const connectWallet = async()=>{
    console.log('connect clicked')
  try{
    getProviderOrSigner();
    setWalletConnected(true);
    setConnecting(false);
  }catch(error){
    console.log("We couldn't connect :", error)
  }
  }

  // Get Mood
  const getMood = async()=>{
    try {
      const providerOrSigner = await getProviderOrSigner(true); 
      // const provider = new ethers.BrowserProvider(provider);
      // const _balance = provider.getBalance();
      const contract = new ethers.Contract(contractAddress, abi, providerOrSigner);
      const currentMood = await contract.getMood();
      setMood(currentMood);
      console.log("This is the currentMood",currentMood)
    } catch (error) {
      console.error('Failed to get mood:', error);
    }
  }
// Set Mood
  const onChangeMood = async (str:string) =>{
    try{
  const providerOrSigner = await getProviderOrSigner(true);
  const contract = new ethers.Contract(contractAddress,abi,providerOrSigner)
  console.log(str);
  const tx = await contract.setMood(str);
  setTransactionStatus('transaction processing ....');
  await tx.wait();
  setMood(str);
  setTransactionStatus('transaction confirmed,' + str + + " " + "mood updated");
  console.log("Mood updated to:", str);
    }catch{

    }
  }
  

  useEffect(()=>{
    web3ModalRef.current = new Web3Modal({
      network: 'sepolia',
      providerOptions: {},
      disableInjectedProvider: false,
    });
  },[])


  return (
    <div>
      <MainPage onChangeMood={onChangeMood} mood={mood} address={address}  connectWallet={connectWallet} transactionStatus={transactionStatus} />
    </div>
  );
}
