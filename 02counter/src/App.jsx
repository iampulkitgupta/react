import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)

  // let counter = 15

  const addValue = () => {
    if (counter === 20){

    }    
    else setCounter(counter + 1)         
  }

  const removeValue = () => {
    if (counter === 0){

    }
    else setCounter(counter - 1)
  }

  return (
    <>
      <h1>React Learning</h1>
      <h1>Counter Value: {counter}</h1>

      <button 
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
