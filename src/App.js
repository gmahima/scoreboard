import React, { useState } from "react";

const Score = ({ player, handleDecrement, handleIncrement }) => {
  return (
    <div>
      <span>{player.score}</span>
      <button
        onClick={() => {
          handleIncrement(player);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          handleDecrement(player);
        }}
      >
        decrement
      </button>
      <hr />
    </div>
  );
};

const Player = ({ playerName }) => {
  console.log(playerName + " rendered");
  return (
    <div>
      <h1>{playerName}</h1>
    </div>
  );
};

function App() {
  const [players, setPlayers] = useState([
    {
      id: "1",
      name: "harry",
      score: 0
    },
    {
      id: "2",
      name: "draco",
      score: 0
    }
  ]);
  const isWinner = (p) => {
    if (p.score === 100) {
      return true;
    } else return false;
  };
  const handleIncrement = (p) => {
    let n = [...players];
    let t = n.filter((obj) => p.id === obj.id)[0];
    t.score = t.score + 10;
    if (isWinner(t)) {
      alert(t.name + " wins!!");
      n.forEach((obj) => (obj.score = 0));
    }
    setPlayers(n);
  };
  const handleDecrement = (p) => {
    let n = [...players];
    let t = n.filter((obj) => p.id === obj.id)[0];
    t.score = t.score - 10;
    setPlayers(n);
  };

  return (
    <div className="App">
      {players.map((p) => (
        <div key={p.id}>
          <Player playerName={p.name} />
          <Score
            player={p}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
