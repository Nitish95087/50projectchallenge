import React, { useState } from 'react'

const SimpleCalculator = () => {

    const [number, setNumber] = useState("")

    const handleButton = (num)=>{
      setNumber(prev => prev + num);
    }

    const backsapce = ()=>{
        if(number !== "NaN"){
            const updatedNumber = number.slice(0, number.length-1);
            setNumber(updatedNumber);
        }else{
            setNumber("");
        }
    }

    const displayAnswer = ()=>{
        const answer = eval(number);
        setNumber(answer.toString());
    }

    const handlePercentage = ()=>{
        const percentageAnswer = number.toString() / 100;
        setNumber(percentageAnswer);
    }


  return (
    <div>
        <h1 className='text-xl font-bold mb-4 text-center text-cyan-800'>Simple Calc</h1>
        <div className="w-[300px]  border border-cyan-800 bg-white rounded-2xl px-5 py-4 shadow-2xl">
            <div className="w-full h-[50px] bg-cyan-800 rounded-lg pr-1">
                <input type="text" disabled className='w-full h-full bg-transparent text-white text-2xl text-right font-bold focus:border-none focus:outline-none' value={number} />
            </div>
            <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                    <button className='button bg-sky-300' onClick={()=>{handleButton("%")}}>%</button>
                    <button className='button bg-sky-300' onClick={()=>{handlePercentage("√")}}>√</button>
                    <button className='button bg-sky-300' onClick={()=>{setNumber("")}}>CE</button>
                    <button className='button bg-gray-950 text-white' onClick={backsapce}>C</button>
                </div>
                <div className="flex items-center justify-between mb-2">
                    <button className='button bg-gray-400'  onClick={()=>{handleButton("7")}}>7</button>
                    <button className='button bg-gray-400' onClick={()=>{handleButton("8")}}>8</button>
                    <button className='button bg-gray-400' onClick={()=>{handleButton("9")}}>9</button>
                    <button className='button bg-pink-500 text-white text-2xl'onClick={()=>{handleButton("-")}}>-</button>
                </div>
                <div className="flex items-center justify-between mb-2">
                    <button className='button bg-gray-400' onClick={()=>{handleButton("4")}}>4</button>
                    <button className='button bg-gray-400' onClick={()=>{handleButton("5")}}>5</button>
                    <button className='button bg-gray-400' onClick={()=>{handleButton("6")}}>6</button>
                    <button className='button bg-blue-500' onClick={()=>{handleButton("/")}}>/</button>
                </div>
                <div className="flex items-center justify-between mb-2">
                    <button className='button bg-gray-400' onClick={()=>{handleButton("1")}}>1</button>
                    <button className='button bg-gray-400' onClick={()=>{handleButton("2")}}>2</button>
                    <button className='button bg-gray-400' onClick={()=>{handleButton("3")}}>3</button>
                    <button className='button bg-yellow-500' onClick={()=>{handleButton("*")}}>*</button>
                </div>
                <div className="flex items-center justify-between mb-2">
                    <button className='button bg-gray-400' onClick={()=>{handleButton(".")}}>.</button>
                    <button className='button bg-gray-400' onClick={()=>{handleButton("0")}}>0</button>
                    <button className='button bg-sky-300' onClick={displayAnswer}>=</button>
                    <button className='button bg-green-500' onClick={()=>{handleButton("+")}}>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SimpleCalculator