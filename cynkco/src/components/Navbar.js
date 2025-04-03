import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import {
  PersonOutline as PersonOutlineIcon,
  Search as SearchIcon,
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import cynckoLogo from "../Assets/cynkco.png"; // Adjust if needed

function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Products",
      subcategories: [
        { label: "Smart Screens", path: "/products/smart-screens" },
        { label: "Accessories", path: "/products/accessories" },
        { label: "Stands", path: "/products/smartscreen-stands" },
      ],
    },
    { label: "Solutions", path: "/solutions" },
    { label: "Support", path: "/support" },
    { label: "Partners", path: "/partners" },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const isParentActive = (item) => {
    if (item.path && location.pathname === item.path) return true;
    if (item.subcategories) {
      return item.subcategories.some((sub) =>
        location.pathname.startsWith(sub.path)
      );
    }
    return false;
  };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const mobileDrawer = (
    <Box sx={{ width: 260, p: 2 }}>
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.label}>
            <ListItem
              button
              onClick={
                item.subcategories ? () => setProductsOpen(!productsOpen) : undefined
              }
              component={item.subcategories ? "div" : Link}
              to={item.subcategories ? undefined : item.path}
              sx={{
                color: isParentActive(item) ? "#24AC4C" : "inherit",
                fontWeight: isParentActive(item) ? "bold" : "normal",
              }}
            >
              <ListItemText primary={item.label} />
              {item.subcategories &&
                (productsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItem>

            {item.subcategories && (
              <Collapse in={productsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subcategories.map((sub) => (
                    <ListItem
                      key={sub.label}
                      component={Link}
                      to={sub.path}
                      sx={{
                        pl: 4,
                        color: isActive(sub.path) ? "#24AC4C" : "inherit",
                        fontWeight: isActive(sub.path) ? "bold" : "normal",
                      }}
                    >
                      <ListItemText primary={sub.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff", color: "#000" }}>
      <Toolbar>
        {/* Logo */}
        <Box component={Link} to="/" sx={{ textDecoration: "none", mr: 3 }}>
          <img src={cynckoLogo} alt="Cynkco Logo" style={{ height: "40px" }} />
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            {navItems.map((item) => (
              <Box key={item.label}>
                <Button
                  component={item.subcategories ? "button" : Link}
                  to={item.subcategories ? undefined : item.path}
                  onMouseEnter={
                    item.subcategories ? (e) => setAnchorEl(e.currentTarget) : null
                  }
                  sx={{
                    mx: 1,
                    color: isParentActive(item) ? "#24AC4C" : "inherit",
                    fontWeight: isParentActive(item) ? "bold" : "normal",
                  }}
                >
                  {item.label}
                </Button>

                {item.subcategories && (
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{ onMouseLeave: () => setAnchorEl(null) }}
                  >
                    {item.subcategories.map((sub) => (
                      <MenuItem
                        key={sub.label}
                        component={Link}
                        to={sub.path}
                        onClick={() => setAnchorEl(null)}
                        sx={{
                          color: isActive(sub.path) ? "#24AC4C" : "inherit",
                          fontWeight: isActive(sub.path) ? "bold" : "normal",
                        }}
                      >
                        {sub.label}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        )}

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right Side Icons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          {isMobile && (
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {mobileDrawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
