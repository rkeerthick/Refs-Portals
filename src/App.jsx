import Player from "./components/Player.jsx";
import TimerChallege from "./components/TimerChallege.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallege title="Easy" targetTime="1" />
        <TimerChallege title="Not Easy" targetTime="5" />
        <TimerChallege title="Tough" targetTime="10" />
        <TimerChallege title="Pros" targetTime="15" />
      </div>
    </>
  );
}

export default App;
