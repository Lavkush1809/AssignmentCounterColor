import React, { useState } from 'react'
import './App.css'
export default function App() {
  const[count,setCount]=useState(0)
  const Increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const Color = count < 5 ? "green" : count < 10 ? "blue" : "red";
  return (
    <div>
       <h1 style={{ color: Color }}>Count:{count}</h1>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}
