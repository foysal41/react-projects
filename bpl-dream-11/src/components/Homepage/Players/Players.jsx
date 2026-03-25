import React, { use } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";

const Players = ({ playerPromise }) => {
  const players = use(playerPromise);
  return (
    <div className="container mx-auto">
      players: {players.length}
      <AvailablePlayers players={players}></AvailablePlayers>
    </div>
  );
};

export default Players;
