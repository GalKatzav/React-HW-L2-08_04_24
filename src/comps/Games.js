import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Games() {
  const [searchParams] = useSearchParams();
  const year = searchParams.get("year");
  const [games, setGames] = useState([]);

  useEffect(() => {
    doApi();
  }, []);
  const doApi = async () => {
    const url = "http://fs1.co.il/bus/xbox1.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const filteredGames = data.filter((game) => game.Year === parseInt(year));
      setGames(filteredGames);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2>Games from {year}</h2>
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
