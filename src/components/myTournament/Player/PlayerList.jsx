import React from 'react';
import { PLAYERS } from '../../../assests/MockData/tournaments';
import PlayerCard from './PlayerCard';

const PlayerList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Players</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLAYERS.map((player) => (
          <PlayerCard key={player._id} playerData={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
