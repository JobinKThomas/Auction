// pages/TeamList.jsx
import React, { useState } from 'react';
import TeamCard from './TeamCard';
import { TEAMS } from '../../../assests/MockData/tournaments';
import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TeamModal from '../../team/TeamModal';

const TeamList = () => {
  const tData = [{
    "_id": "688864317cbbdaa78ca5a717",
    "title": "ABC League",
    "subtitle": "ABC",
    "date": "2025-08-02",
    "season": "1",
    "teamLimit": 2,
    "playerLimit": 20,
    "contact": "9656003456",
    "code": "0MUGDY",
    "logo": "https://picsum.photos/300/200",
    "__v": 0
  },]
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAMS.map((team) => (
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
        <TeamModal openModal={openModal} handleCloseModal={handleCloseModal} data={tData} />
      </div>
    </div>
  );
};

export default TeamList;
