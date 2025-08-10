import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ toggleDrawer }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar position="sticky" className="bg-white shadow-md">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-white">
          Auction
        </Typography>
        {isMobile && (
          <IconButton edge="end" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon className="text-white" />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
