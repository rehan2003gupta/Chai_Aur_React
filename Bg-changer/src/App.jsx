import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let c='#93C5FD'
  const [color, setColor] = useState(c)
  let cc='	#f3f4f6'
  const [divs, setdivs] = useState(cc)
  let ccc='blue-300'
  const [buttons,setbutton] = useState(ccc)
  const handleColor= (newColor)=> {
    setColor(newColor);
    setbutton(newColor);
    if (newColor!=color){
    setdivs(color);
    }
  };
  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className="w-full relative text-blue-50 top-32 h-screen flex  justify-center text-center text-3xl font-bold">
        <p >HELLO GUYS, WELCOME TO BG-CHANGER !</p>
        </div>
        <div className='shadow-lg px-3 py-2 rounded-xl text-black font-bold fixed bottom-12 inset-x-0 
                        flex justify-center flex-wrap mx-16 gap-3 bg-white' style={{ backgroundColor: divs }}>
        <button onClick={() => handleColor('#f87171')} className='w-[5rem] outline-none p-2.5 bg-blue-300 rounded-lg'  style={{ backgroundColor: buttons }}>Red</button>
        <button onClick={() =>  handleColor('	#60a5fa')} className='w-[5rem] outline-none p-2.5 bg-blue-300 rounded-lg'  style={{ backgroundColor: buttons }}>Blue</button>
        <button onClick={() => handleColor('#facc15')} className='w-[5rem] outline-none p-2.5 bg-blue-300 rounded-lg'  style={{ backgroundColor: buttons }}>Yellow</button>
        <button onClick={() =>  handleColor('	#4ade80')} className='w-[5rem] outline-none p-2.5 bg-blue-300 rounded-lg'  style={{ backgroundColor: buttons }}>Green</button>
        <button onClick={() => handleColor('	#c084fc')} className='w-[5rem] outline-none p-2.5 bg-blue-300 rounded-lg' style={{ backgroundColor: buttons }}>Purple</button>
        <button onClick={() =>  handleColor('	#a78b61')} className='w-[5rem] outline-none p-2.5 bg-blue-300 rounded-lg' style={{ backgroundColor: buttons }}>Brown</button>
         <button onClick={() =>  handleColor('#e5e7ef')} className='w-[5rem] outline-none p-2.5 bg-blue-300 rounded-lg' style={{ backgroundColor: buttons }}>Gray</button>
         
      </div>
      </div>
    </>
  )
}

export default App
