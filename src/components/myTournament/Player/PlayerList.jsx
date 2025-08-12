import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PlayerModal from "../../playerInfo/PlayerModal";
import { useSelector } from "react-redux";

const PlayerList = () => {
  const { tournament } = useSelector((state) => state.tournament);
  const { playersIn = [] } = useSelector((state) => state.player || {});
  
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className=" p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Players</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playersIn.map((player) => (
          <PlayerCard key={player._id} playerData={player} />
        ))}
        <Tooltip title="Create Tournament" placement="left">
          <Fab
            color="primary"
            aria-label="add"
            className="!fixed !bottom-6 !right-6 !z-50"
            onClick={handleOpenModal}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
        <PlayerModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          data={tournament}
        />
      </div>
    </div>
  );
};

export default PlayerList;
