import { useState,useCallback, useEffect,useRef } from 'react'


function App() {
  const [length, setlength] = useState(10);
  const [password,setPassword]=useState('');
  const [Numallowed,setNumallowed]=useState(false);
  const [Charallowed,setCharallowed]=useState(false);
  //useRef hook
  const passwordRef = useRef(null)
  const generate_password = useCallback(()=>{
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(Numallowed) str+='0123456789'
    if(Charallowed) str+='~!@#$%^&*()_+{}":?><|='
    let result=''
    for(let i=0;i<length;i++){
      result += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(result);
  },[length, Numallowed, Charallowed, setPassword])
  useEffect(()=>{
    generate_password()
  },[generate_password,length,Numallowed,Charallowed])
  const copytoclipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  },[password])
  return (
    <>
      <div className='w-full h-screen bg-black flex flex-col items-center justify-center'>
        <div className='bg-[#1e1e1e] p-6 rounded-lg w-[90%]  max-w-lg'>
            <div className='h-9 rounded-lg flex  max-w-md'>
              <input ref={passwordRef} type="text" readOnly value={password} dir="ltr" className="bg-white w-[80%] border-none focus:outline-none focus:ring-0 pl-2 rounded-s-2xl" />
              <button onClick={()=>{
                copytoclipboard()
              }} dir="rtl" className='bg-blue-500 w-[20%] transition-transform hover:scale-102 hover:bg-blue-700 font-bold text-white rounded-s-2xl'>Copy</button>
            </div>
            <div className='mt-4 flex flex-row gap-4 text-orange-400'>
              <div className="flex items-center gap-3">
                <input type="range" min='4' max='20' onChange={(e)=>{setlength(Number(e.target.value))}}/>
                <span>Length({length})</span>
              </div>
              <div className='flex flex-row gap-4 items-center'>
                  <input type="checkbox" defaultChecked={Numallowed} id="numberInput"
          onChange={() => {
              setNumallowed((prev) => !prev);
          }}/>
                  <span>Number</span>
                <input type="checkbox" defaultChecked={Charallowed} id="numberInput"
          onChange={() => {
              setCharallowed((prev) => !prev);
          }}/>
                  <span>Character</span> 
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
/*
import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNumbers) chars += '0123456789';
    if (useSymbols) chars += '!@#$%^&*()_+[]{}|;:,.<>?';

    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="bg-[#1e1e1e] p-6 rounded-lg w-[90%] max-w-md">
        <div className="flex items-center bg-white rounded overflow-hidden">
          <input
            type="text"
            readOnly
            value={password}
            className="w-full p-2 outline-none text-black"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
          >
            copy
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-4 text-orange-400">
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="4"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="accent-blue-500"
            />
            <span>Length ({length})</span>
          </div>

          <div className="flex gap-4 items-center">
            <label>
              <input
                type="checkbox"
                checked={useNumbers}
                onChange={() => setUseNumbers(!useNumbers)}
                className="mr-1"
              />
              Numbers
            </label>

            <label>
              <input
                type="checkbox"
                checked={useSymbols}
                onChange={() => setUseSymbols(!useSymbols)}
                className="mr-1"
              />
              Characters
            </label>
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;

*/