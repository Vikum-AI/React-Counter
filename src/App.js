import React from 'react';
import './App.css'


const {useState} = React;


export default function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className='container'>


    <h1 className="header"> React Counter </h1>
    <p className="counter-display">{counter}</p>


    <button className='btn' onClick={
      () => {
        setCounter(counter + 1)
      }
    }> Increase </button>


    <button className='btn' onClick = {
      () => {
        setCounter(counter - 1)
      }
    }> Decrease </button>


    <button className='btn' onClick={
      () => {
        setCounter(counter-counter)
      }
    }> AC </button>


    </div>
  )
}





