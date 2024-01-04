import React,{useState} from 'react'

const FunnyHelloWorld = ({setChangeBgColor}) => {

    // 1. Take a useState for exicitement level
    // 2. Create increase excitement level function
    // 3. Create funny message function

    const [excitementLevel, setExcitementLevel] = useState(0);
 
    const increaseExcitementLevel = ()=>{
     setExcitementLevel(excitementLevel+1);
    }

    const showFunnyMessage = ()=>{
        const exclamation = '🎉'.repeat(excitementLevel +1);
        return `Hello World ${exclamation}! Let's keep the excitement going! ${exclamation}`;
    }


  return (
    <div>
     <p  className='text-white'>{showFunnyMessage()}</p>

     <button onClick={increaseExcitementLevel} className='font-bold  bg-red-300 p-2 mt-4 rounded-sm cursor-pointer text-black'>Click here to increase excitement level and </button>

    </div>
  )
}

export default FunnyHelloWorld