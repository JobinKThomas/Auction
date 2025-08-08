import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import clsx from 'clsx';
// const Sidebar = ({ open, toggleDrawer, isMobile }) => {
//   const sidebarContent = (
//     <div className="w-64 p-4 mt-10">
//       <List>
//         {['My Tournaments','Create Tournament','View Auctions', 'Join as Player'].map((text) => (
//           <ListItem button key={text}>
//             <ListItemText primary={text}/>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return isMobile ? (
//     <Drawer anchor="left" open={open} onClose={toggleDrawer}>
//       {sidebarContent}
//     </Drawer>
//   ) : (
//     <div className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-white shadow-md z-10">
//       {sidebarContent}
//     </div>
//   );
// };
const Sidebar = ({ open, toggleDrawer, isMobile, onSelect, activePage }) => {
  const menuItems = ['My Tournaments','Create Tournament','View Auctions', 'Join as Player'];

  const sidebarContent = (
    <div className="w-64 p-4 mt-10">
      <List>
        {menuItems.map((text) => (
          <ListItem button key={text} onClick={() => {
            onSelect(text);
            if (isMobile) toggleDrawer(); // close drawer on mobile
          }}
          className={clsx(
              'rounded-md mb-1',
              text === activePage
                ? 'bg-blue-100 text-blue-600 font-semibold'
                : 'hover:bg-gray-100'
            )}>
            <ListItemText primary={text}/>
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
    <div className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-white shadow-md z-10">
      {sidebarContent}
    </div>
  );
};


export default Sidebar;
