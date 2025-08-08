// components/TabbedPanel.jsx
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TeamList from './Team/TeamList';
import PlayerList from './Player/PlayerList';
import TournamentsPage from './Tournament/TournamentsPage';

const TabbedPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <Tabs value={activeTab} onChange={handleChange} variant="fullWidth" centered>
        <Tab label="Team" />
        <Tab label="Player" />
        <Tab label="About" />
      </Tabs>
      <Box className="mt-6">
        {activeTab === 0 && (
          <div className="text-gray-700 text-lg">
            <TeamList />
          </div>
        )}
        {activeTab === 1 && (
          <div className="text-gray-700 text-lg">
            <PlayerList />
          </div>
        )}
        {activeTab === 2 && (
          <div className="text-gray-700 text-lg">
            <TournamentsPage />
          </div>
        )}
      </Box>
    </div>
  );
};

export default TabbedPanel;
