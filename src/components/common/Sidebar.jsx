import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import clsx from "clsx";

const menuItems = [
  "My Tournaments",
  "Create Tournament",
  "View Auctions",
  "Join as Player",
];

const Sidebar = ({ open, toggleDrawer, isMobile, onSelect, activePage }) => {
  const sidebarContent = (
    <div className="w-64 p-4 mt-4">
      <List>
        {menuItems.map((text) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              onSelect(text);
              if (isMobile) toggleDrawer();
            }}
            className={clsx(
              "rounded-md mb-1 cursor-pointer",
              text === activePage
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "hover:bg-gray-100"
            )}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return isMobile ? (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      {sidebarContent}
    </Drawer>
  ) : (
    <div className="hidden lg:block fixed top-[64px] left-0 h-[calc(100%-64px)] w-64 bg-white shadow-md border-r border-gray-200 z-10">
      {sidebarContent}
    </div>
  );
};
export default Sidebar;
