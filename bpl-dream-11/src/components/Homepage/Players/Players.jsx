import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, setCoin, coin }) => {
  const players = use(playerPromise);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([])

  return (
    <div className="container mx-auto my-15">
      <div className="flex justify-between gap-4 items-center mb-5">
        {selectedType === "available" ? (
          <h2 className="font-bolt text-2xl">Available Players</h2>
        ) : (
          <h2 className="font-bolt text-2xl">Selected Players (2/6)</h2>
        )}

        <div className="">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}  rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}
          >
            Selected (0)
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}

        ></AvailablePlayers>
      ) : (
        <SelectedPlayers selectedPlayers={selectedPlayers} ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
