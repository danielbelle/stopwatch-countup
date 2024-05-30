import { useState, useEffect } from 'react';
import './App.css';


export default function App() {


  return (
    <div className="app">
      <header className="container">
        <h1 className="center">
          Stopwatch
        </h1>
        <Timer />

      </header>
    </div>
  );
}

function Timer() {
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    setIsRunning(!isRunning)
  }

  function handleStop() {
    setIsRunning(false)
    setTimer(0)
  }

  useEffect(() => {
    let intervalId;
    if (isRunning) {

      intervalId = setInterval(() => setTimer(timer + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, timer]);

  // Hours calculation
  const hours = Math.floor(timer / 360000);

  // Minutes calculation
  const minutes = Math.floor((timer % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((timer % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = timer % 100;

  return (
    <>
      <p className='center'>{hours}:{minutes}:{seconds}:{milliseconds}</p>
      <Button onClick={handleStart}>{isRunning ? "Pause" : "Start"}</Button>
      <Button onClick={handleStop} className="btn-outline">Reset</Button>
    </>
  )
}

function Button({ children, className, onClick }) {
  return <button className={`btn ${className}`} onClick={onClick}>{children}</button>
}