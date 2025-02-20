import React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuId = "primary-profile-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenu = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={handleDrawerToggle}
      sx={{
        '.MuiDrawer-paper': {
          backgroundColor: '#003049', // Dark background
          color: 'white', // White text
          width: 250, // Width of the menu
          borderTopLeftRadius: '10px', // Rounded top corners
          borderBottomLeftRadius: '10px', // Rounded bottom corners
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)', // Shadow effect
          textDecoration: 'none', // Remove underline from links
        },
      }}
    >
      <List sx={{ padding: '20px 0' }}>
        <ListItem
          button
          component={Link}
          to="/"
          onClick={handleDrawerToggle}
          sx={{
            padding: '10px 20px',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
            transition: 'background-color 0.3s ease',
            color: '#fff',
            fontFamily: 'Roboto',
            '&:hover': {
              backgroundColor: '#0077b6', 
              color: '#fff', // White text on hover
            },
          }}
        >
          Home
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/profiles"
          onClick={handleDrawerToggle}
          sx={{
            padding: '10px 20px',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
            transition: 'background-color 0.3s ease',
            color: '#fff',
            fontFamily: 'Roboto',
            '&:hover': {
              backgroundColor: '#0077b6',
              color: '#fff',
            },
          }}
        >
          Profiles
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/admin"
          onClick={handleDrawerToggle}
          sx={{
            padding: '10px 20px',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
            transition: 'background-color 0.3s ease',
            color: '#fff',
            fontFamily: 'Roboto',
            '&:hover': {
              backgroundColor: '#0077b6',
              color: '#fff',
            },
          }}
        >
          Admin Panel
        </ListItem>
      </List>
      <Divider sx={{ backgroundColor: '#003049', margin: '10px 0' }} /> {/* Green divider */}
    </Drawer>
  );
  

  return (
    <Box sx={{ flexGrow: 1, m: 0, p: 0 }}>
      <AppBar position="static" sx={{ bgcolor: "#003049", m: 0, p: 0 }}>
        <Toolbar>
          {/* Logo and Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Profile Explorer
          </Typography>

          {/* Hamburger Menu for Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, m: 0, p: 0 }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Navigation Links for Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, m: 0, p: 0 }}>
            <Button
              color="inherit"
              sx={{ fontSize: "1rem", fontWeight: 500 }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{ fontSize: "1rem", fontWeight: 500 }}
              component={Link}
              to="/profiles"
            >
              Profiles
            </Button>
            <Button
              color="inherit"
              sx={{ fontSize: "1rem", fontWeight: 500 }}
              component={Link}
              to="/admin"
            >
              Admin Panel
            </Button>
          </Box>

          {/* Search Bar */}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search Profiles…" />
          </Search> */}

          {/* Profile Icon */}
          <Box sx={{ ml: 2 }}>
            <IconButton
              size="large"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {mobileMenu}
    </Box>
  );
}
