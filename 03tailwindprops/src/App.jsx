import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "neetesh",
    age:21
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-red-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="Neetesh" someObj={myObj} obj2={newArr } changePara = "Neetesh lodhi is a hardworking boy " />
      <Card username="Lodhi" />
      
    </>
  );
}

export default App
