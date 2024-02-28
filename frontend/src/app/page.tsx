"use client"
import MainPage from "@/components/MainPage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mood,setMood] = useState<string>('');
  const [walletConnected,setWalletConnected] = useState<boolean>(false);
  const [address,setAddress] = useState<string>('')

  const onChangeMood = (moodLabel:string) =>{
    setMood(moodLabel);
  }



  return (
   <div>
   <MainPage onChangeMood={onChangeMood} mood={mood} address={address} />
   </div>
  );
}
