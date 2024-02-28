import React from 'react'


type moodDiaryProps ={
  onChangeMood : (mood:string)=>void;
  mood:string;
  address :string;
}

function MainPage({mood , onChangeMood, address}:moodDiaryProps) {
  const backgroundColor = mood === 'happy' ? 'bg-yellow-400' :
  mood === 'calm' ? 'bg-[gainsboro]' : 
  mood === 'sad' ? 'bg-blue-950' :
  mood === 'angry' ? 'bg-red-700' : 
  'bg-red-100'; 
  return (
    <div className={` relative w-screen h-screen  ${backgroundColor} text-white flex items-center justify-center`}>
  <div className='w-[90%] md:w-[100%] xl:w-[80%]  grid gap-5 md:gap-8'>
  <div className='w-[90%] md:w-[80%] mx-auto '>
    <div className='mx-auto font-bold text-[24px] sm:text-[32px] md:text-[42px]'>Hi , How are you feeling Today ?</div>
   </div>
   <div className='flex  w-[90%] md:w-[90%] xl:w-[70%] mx-auto flex-wrap  justify-between'>
    <button className={`bg-gray-900 px-4 py-2 rounded-md h-[47px] flex justify-center items-center w-[23%] md:w-[200px] text-[10px]  sm:text-[12px] md:text-[14px]`}  onClick={()=>{onChangeMood('happy')}} >HAPPY</button>
    <button className={`bg-gray-900 px-4 py-2 rounded-md h-[47px] flex justify-center items-center w-[23%] md:w-[200px] text-[10px]  sm:text-[12px] md:text-[14px]`}  onClick={()=>{onChangeMood('calm')}}>CALM</button>
    <button className={`bg-gray-900 px-4 py-2 rounded-md h-[47px] flex justify-center items-center w-[23%] md:w-[200px] text-[10px]  sm:text-[12px] md:text-[14px]`}  onClick={()=>{onChangeMood('sad')}}>SAD</button>
    <button className={`bg-gray-900 px-4 py-2 rounded-md h-[47px] flex justify-center items-center w-[23%] md:w-[200px] text-[10px]  sm:text-[12px] md:text-[14px]`}  onClick={()=>{onChangeMood('angry')}}>ANGRY</button>
   </div>
  </div>

  <div className='absolute top-0 right-0 w-full  h-[50px] md:h-[70px]  bg-white text-black flex items-center  '>
  <div className='w-11/12 md:w-[70%] mx-auto  flex justify-between items-center'>
  <p className='font-semibold text-[18px] sm:text-[20px] md:text-[24px] text-gray-900'>Mood Diary</p>
    <button className='px-2 py-2 text-white bg-gray-900 flex rounded-md'>{address ? '' :'Connect Wallet'}</button>
  </div>
  </div>

    </div>
  )
}

export default MainPage
