import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const currentPath = location.pathname;
  const pageMap = {
    '/my-tournaments': 'My Tournaments',
    '/create-tournament': 'Create Tournament',
    '/view-auctions': 'View Auctions',
    '/join-as-player': 'Join as Player'
  };
  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Sidebar
        isMobile={isMobile}
        open={mobileOpen}
        toggleDrawer={() => { }}
        onSelect={(label) => {
          const path = Object.entries(pageMap).find(([, value]) => value === label)?.[0];
          if (path) navigate(path);
        }}
        activePage={pageMap[currentPath]}
      />
      <main className="flex-1 ml-0 lg:ml-64 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
