import React, { useState } from 'react';
import { PLAYERS } from '../../../assests/MockData/tournaments';
import PlayerCard from './PlayerCard';
import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PlayerModal from '../../playerInfo/PlayerModal';

const PlayerList = () => {
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
      <h1 className="text-2xl font-bold text-center mb-6">Players</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLAYERS.map((player) => (
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
        <PlayerModal openModal={openModal} handleCloseModal={handleCloseModal} data={tData} />
      </div>
    </div>
  );
};

export default PlayerList;
