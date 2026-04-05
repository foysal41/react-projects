import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeleteSelectedPlayer = (onlySelectedPlayer) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayer) =>
        selectedPlayer.playerName != onlySelectedPlayer.playerName,
    );

    console.log(coin);

    setSelectedPlayers(filteredPlayers);
    // console.log(onlySelectedPlayer.price); // 300
    setCoin((prevCoin) => prevCoin + onlySelectedPlayer.price);
  };
  return (
    <div>
      {selectedPlayers.length === 0 ? (
        <div className="h-100 flex items-center justify-center flex-col gap-2">
          <h2>No payers selected yet</h2>
          <p> Go To Available tab to select players</p>
        </div>
      ) : (
        selectedPlayers.map((onlySelectedPlayer, indx) => {
          return (
            <div>
              <div
                key={indx}
                className="flex mb-4 items-center gap-6 justify-between p-10 rounded-2xl border"
              >
                <div className="flex items-center gap-6">
                  <img
                    className="h-20 w-auto rounded-md"
                    src={onlySelectedPlayer.playerImage}
                    alt=""
                  />
                  <div>
                    <h2 className="flex items-center gap-2 font-semibold text-2xl">
                      <FaRegUser />
                      {onlySelectedPlayer.playerName}
                    </h2>
                    <p>{onlySelectedPlayer.playerType}</p>
                  </div>
                </div>

                <button
                  className="btn text-red-500"
                  onClick={() => handleDeleteSelectedPlayer(onlySelectedPlayer)}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
