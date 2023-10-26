import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallege = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const handleStart = () => {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  };
  const handleStop = () => {
    clearTimeout(timer.current);
  };
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost</p>}
        <p className="challenge-item">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p>{timerStarted ? "Timer is running..." : "Timer inactive"}</p>
      </section>
    </>
  );
};

export default TimerChallege;
