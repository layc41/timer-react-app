import React, { useState, useEffect } from "react";

function Timer() {
  const [countdown, setCountdown] = useState(5);
  const [pause, setPause] = useState(5);
  const [cCount, setCountdownCount] = useState(0)
  const [pCount, setPauseCount] = useState(0)
 
  // set false because the timer should not begin till you trigger it
  const [timerOn, setTimer] = useState(false);

  const toggleTimer = () => {
    setTimer(!timerOn);
  };

  // let pCount = 0
  // let cCount = 0 

  // if (countdown === 0 ) {
  //   cCount += 1
  // }

  // if (pause === 0 ) {
  //   pCount += 1
  // }

  useEffect(() => {
    let interval = null;
    // let updatedpCount = pCount
    // let updatedcCount = cCount

    if (timerOn && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);
      // timerOn = true
    }

    if (countdown === 0) {   
      clearInterval(interval);
      interval = setInterval(() => {
        setPause((pause) => pause - 1);
      }, 1000);
      // timerOn = false
    }

    if (pause === 0) {
      clearInterval(interval);
      setCountdown(5)
      // timerOn = false
    }

    return () => clearInterval(interval);
  }, [timerOn, countdown, pause]);

  return (
    <div>
      <p>Countdown: {countdown} Seconds </p>
      <p>Pause: {pause} Seconds</p>
      <p>Number of Countdowns: {cCount}</p>
      <p>Number of Pauses: {pCount}</p>
      <button onClick={() => toggleTimer()}>Start/Pause Timer</button>
      {/* <button onClick={() => stopTimer()}>Stop Timer</button> */}
    </div>
  );
}

export default Timer;

// when countdown = 0. I want to add one to the cCount
// when pause = 0. I want to add one to the pCount
// when countdown is done the pause countdown starts, then cycles back and forth
// 
