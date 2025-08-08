// pages/TournamentsPage.jsx
import React from 'react';
import TournamentList from './TournamentList';

const tournaments = [
  {
    _id: "688864317cbbdaa78ca5a717",
    title: "ABC League",
    subtitle: "ABC",
    date: "2025-08-02",
    season: "1",
    teamLimit: 2,
    playerLimit: 20,
    contact: "9656003456",
    code: "0MUGDY",
    logo: "https://picsum.photos/300/200"
  },
  // ... more tournaments
];

const TournamentsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Tournaments</h1>
      <TournamentList tournaments={tournaments} />
    </div>
  );
};

export default TournamentsPage;
