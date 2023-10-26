import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState(null);

  const handleSubmit = () => {
    setName(playerName.current.value);
  };
  const displayName = name ?? "Unknown Entity";
  return (
    <section id="player">
      <h2>Welcome {displayName}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
