import { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

const pageMap = {
  "/my-tournaments": "My Tournaments",
  "/create-tournament": "Create Tournament",
  "/view-auctions": "View Auctions",
  "/join-player": "Join as Player",
};

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header toggleDrawer={toggleDrawer} />

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          isMobile={isMobile}
          open={mobileOpen}
          toggleDrawer={toggleDrawer}
          onSelect={(label) => {
            const path = Object.entries(pageMap).find(
              ([, value]) => value === label
            )?.[0];
            if (path) navigate(path);
          }}
          activePage={pageMap[currentPath]}
        />
        <main
          className={`flex-1 p-4 transition-all duration-300 ${
            isMobile ? "ml-0" : "ml-64"
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
