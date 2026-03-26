import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import Players from "./../Players";

const AvailablePlayers = ({
  players,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = (player) => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      alert("Not enougth coin");
      return;
    }

    alert(`${player.playerName} is selected`);
    setIsSelected(true);
    setSelectedPlayers(...selectedPlayers, player);
  };

  return (
    <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {players.map((player) => {
        return (
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img
                className="h-80 w-80 object-cover rounded-lg"
                src={player.playerImage}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <FaUser /> {player.playerName}
              </h2>

              <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  <FaFlag />
                  <p>{player.playerCountry}</p>
                </div>

                <button className="btn">{player.playerType}</button>
              </div>

              <div className="divider"></div>

              <h2 className="font-bold">{player.rating}</h2>
              <div className="flex justify-end gap-4">
                <p className="font-bold">{player.battingStyle}</p>
                <p className="text-right">{player.bowlingStyle}</p>
              </div>

              <div className="card-actions justify-end">
                <p className="font-semibold">Price: ${player.price}</p>
                <button
                  className="btn"
                  onClick={() => handleChoosePlayer(player)}
                >
                  {isSelected === true ? "Selected" : "Choose Player"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
