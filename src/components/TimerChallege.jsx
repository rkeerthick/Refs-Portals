import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallege = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
    setTimeRemaining(targetTime * 1000);
  }
  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };
  const handleStop = () => {
    dialog.current.showModal();
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {!isTimerActive && <p>You lost</p>}
        <p className="challenge-item">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p>{isTimerActive ? "Timer is running..." : "Timer inactive"}</p>
      </section>
    </>
  );
};

export default TimerChallege;
