import { useState } from 'react';
import {
  AppBar, Toolbar, Button, Box, Container,
  IconButton, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import HomeIcon from '@mui/icons-material/Home';
import LogoPersonajes2 from '../../assets/Icons/LogosPersonajes2.png';
import './Navbar.css';
import PortalRick from '../../assets/Icons/PortalRick.png';
import LogoSerie from '../../assets/Icons/Rick_and_Morty.png';

const navLinks = [
  { label: 'Inicio', path: '/', Icon: HomeIcon },
  { label: 'Filtrar por Especie', path: '/filter', Icon: FilterListIcon },
  { label: 'Personajes', path: '/characters', img: LogoPersonajes2 },
];

export default function Navbar() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const renderIcon = (link) =>
    link.Icon
      ? <link.Icon className="navbar__nav-icon" />
      : <img src={link.img} alt={link.label} className="navbar__nav-icon" />;

  return (
    <>
      <AppBar position="sticky" elevation={0} className="navbar">
        <Container maxWidth="xl" className="Container__Main">
          <Toolbar disableGutters className="navbar__toolbar">


            <Box className="navbar__brand-container">
              <img src={PortalRick} alt="Portal" className="navbar__header-portal" />
              <Box component={Link} to="/" className="navbar__header-title">
                <img src={LogoSerie} alt="Rick and Morty" />
              </Box>
            </Box>


            <Box className="navbar__links navbar__links--desktop">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Button
                    key={link.path}
                    component={Link}
                    to={link.path}
                    startIcon={renderIcon(link)}
                    variant={isActive ? 'contained' : 'outlined'}
                    color="primary"
                    className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>


            <IconButton
              className="navbar__hamburger"
              onClick={toggleDrawer(true)}
              aria-label="Abrir menú"
            >
              <MenuIcon style={{ color: '#00ff00', fontSize: 32 }} />
            </IconButton>

          </Toolbar>
        </Container>
      </AppBar>


      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box className="navbar__drawer" role="presentation">

          <Box className="navbar__drawer-header">
            <img src={PortalRick} alt="Portal" className="navbar__drawer-portal" />
            <IconButton onClick={toggleDrawer(false)} aria-label="Cerrar menú">
              <CloseIcon style={{ color: '#00ff00' }} />
            </IconButton>
          </Box>

          <Divider className="navbar__drawer-divider" />

          <List>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <ListItem key={link.path} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={link.path}
                    onClick={toggleDrawer(false)}
                    className={`navbar__drawer-item ${isActive ? 'navbar__drawer-item--active' : ''}`}
                  >
                    <ListItemIcon className="navbar__drawer-icon">
                      {renderIcon(link)}
                    </ListItemIcon>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
