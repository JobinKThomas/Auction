// pages/TournamentsPage.jsx
import React from 'react';
import TournamentList from './TournamentList';
import { useSelector } from "react-redux";

const TournamentsPage = () => {
  const { tournament = [] } = useSelector((state) => state.tournament || {});
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Tournaments</h1>
      <TournamentList tournaments={tournament} />
    </div>
  );
};

export default TournamentsPage;
