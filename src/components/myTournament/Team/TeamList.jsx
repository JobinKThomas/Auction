// pages/TeamList.jsx
import React, { useState } from "react";
import TeamCard from "./TeamCard";
import { Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TeamModal from "../../team/TeamModal";
import { useSelector } from "react-redux";

const TeamList = () => {
  const { tournament } = useSelector((state) => state.tournament);
  const { teamsIn = [] } = useSelector((state) => state.team || {});
  
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamsIn.map((team) => (
          <TeamCard key={team._id} teamData={team} />
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
        <TeamModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          data={tournament}
        />
      </div>
    </div>
  );
};

export default TeamList;
