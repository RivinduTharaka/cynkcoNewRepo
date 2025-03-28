import React, { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger menu icon
import cynckoLogo from "../Assets/cynkco.png"; // Ensure the path is correct
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Breakpoint for mobile (below 900px)
  const [mobileOpen, setMobileOpen] = useState(false); // State for drawer toggle

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  // Toggle drawer for mobile menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigation items array for reusability
  const navItems = [
    { label: "Products", path: "/products" },
    { label: "Solutions", path: "/solutions" },
    { label: "Support", path: "/support" },
    { label: "Partners", path: "/partners" },
    { label: "Commercial Display", path: "/commercial-display" },
  ];

  // Drawer content for mobile
  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            component={Link}
            to={item.path}
            key={item.label}
            sx={{
              color: isActive(item.path) ? "#2596be" : "inherit",
              fontWeight: isActive(item.path) ? "bold" : "normal",
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
      <Toolbar>
        {/* Logo with Link */}
        <Box
          component={Link}
          to="/"
          sx={{ textDecoration: "none", display: "flex", alignItems: "center" }}
        >
          <img
            src={cynckoLogo}
            alt="Cynkco Logo"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </Box>

        {/* Desktop Navigation Links */}
        {!isMobile ? (
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{
                  color: isActive(item.path) ? "#2596be" : "inherit",
                  fontWeight: isActive(item.path) ? "bold" : "normal",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1 }} /> // Spacer for mobile
        )}

        {/* Right Side Icons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
          <IconButton color="inherit">
            <PersonOutlineIcon />
          </IconButton>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Drawer for Mobile */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }} // Show only on mobile
        >
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;