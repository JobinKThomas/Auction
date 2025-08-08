// pages/TeamList.jsx
import React from 'react';
import TeamCard from './TeamCard';
import { TEAMS } from '../../assests/MockData/tournaments';

const TeamList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAMS.map((team) => (
          <TeamCard key={team._id} teamData={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
