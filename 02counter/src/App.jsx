import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter] = useState(5)
  // let counter = 5;

  const addValue = () => {
    // console.log("value added", Math.random())
    if (counter >= 20) {
      // console.log("counter limit exceed")
      alert("counter limit exceed")
    } else {
       counter = counter + 1;
    }
   
    // console.log("value added", counter )
    setCounter(counter)
  }

  const remValue = () => {

    if (counter <= 0) {
      alert("Counter does not print negative numbers")
    } else {

      counter = counter - 1;
    }
  
    
      
      
    
   
    setCounter(counter)
  }

  return (
    
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: { counter }</h2>

      <button onClick={addValue}>Add value{ counter}</button>
      <br/>
       
      <button onClick={remValue }>Remove value{counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
