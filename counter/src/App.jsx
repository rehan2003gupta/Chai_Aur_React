import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => { 
  if (count >= 20){
    count=20;
  }
  else{
      setCount(count+1)
  }
  // This line is necessary to trigger a re-render

  }
  const decreaseValue = () => {
    if (count <= 0){
    count=0;
  }
  else{
        setCount(count-1)// This line is necessary to trigger a re-render
  }
 
  }
  return (
    <>
      <div>
        <h1>Counter Project</h1>
        <button onClick={addValue}>Increment {count}</button>
        <br />
        <button onClick={decreaseValue}>Decrement {count}</button>
      </div>
    </>
  )
}

export default App
