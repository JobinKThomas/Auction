import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MyTournamentsPage from './MyTournamentsPage';

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activePage, setActivePage] = useState('My Tournaments');

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const renderContent = () => {
    switch (activePage) {
      case 'My Tournaments':
        return <div><MyTournamentsPage /></div>;
      case 'Create Tournament':
        return <div>Create Tournament Form</div>;
      case 'View Auctions':
        return <div>Auctions List</div>;
      case 'Join as Player':
        return <div>Player Join Form</div>;
      default:
        return <div>Select an option</div>;
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleDrawer={toggleDrawer} />
      <div className="flex flex-1 pt-4">
        <Sidebar open={mobileOpen} toggleDrawer={toggleDrawer} isMobile={isMobile} onSelect={setActivePage} activePage={activePage}/>
        <div className="flex-1 ml-0 lg:ml-64 p-4">
          <div className="mt-4">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
