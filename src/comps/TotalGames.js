// TotalGames.js
import React, { useEffect, useState } from "react";

export default function TotalGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const doApi = async () => {
      const url = "http://fs1.co.il/bus/xbox1.php";
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setGames(data);
      } catch (err) {
        console.log(err);
      }
    };
    doApi();
  }, []);

  return (
    <div className="container">
      <h2>Total Games: {games.length}</h2>
      <ul>
        {games.map((game, index) => (
          <li key={index}>
            <a href={game.GameLink} target="_blank" rel="noopener noreferrer">
              {game.Game}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
