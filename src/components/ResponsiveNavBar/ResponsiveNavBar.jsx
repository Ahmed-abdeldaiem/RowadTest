import React, { useState } from 'react';
import { Box, Drawer, IconButton, useMediaQuery, useTheme, Badge, AppBar, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import UpperNavBar from '../UpperNavBar/UpperNavBar';
import MainNav from '../MainNav/MainNav';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// Styled components
const NavContainer = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 1100,
  backgroundColor: '#fff',
  transition: 'all 0.3s ease-in-out',
  width: '100%'
}));

const MobileHeader = styled(AppBar)(({ theme }) => ({
  display: 'none',
  backgroundColor: theme.palette.dark1.main,
  boxShadow: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const MobileToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
}));

const IconGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.error.main,
    color: '#fff',
  },
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column'
}));

export default function ResponsiveNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleUserDrawerToggle = () => {
    setUserDrawerOpen(!userDrawerOpen);
  };

  const mobileDrawer = (
    <DrawerContent>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            bgcolor: theme.palette.dark1.main,
            color: '#fff',
            '&:hover': {
              bgcolor: theme.palette.dark2.main,
            },
            transition: 'all 0.3s ease-in-out',
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        <MainNav isMobile={true} onClose={handleDrawerToggle} />
      </Box>
    </DrawerContent>
  );

  return (
    <NavContainer position='fixed' top={0} sx={{backgroundColor:'transparent'}}>
      {/* Mobile Header */}
      <MobileHeader position="fixed">
        <MobileToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              color: '#fff',
            }}
          >
            <MenuIcon />
          </IconButton>

          <IconGroup>
            <Link to="favorite">
              <StyledBadge badgeContent={4} color="error">
                <FavoriteIcon sx={{ 
                  color: '#fff',
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'red',
                  }
                }} />
              </StyledBadge>
            </Link>

            <Link to="cart">
              <StyledBadge badgeContent={4} color="error">
                <ShoppingCartIcon sx={{ 
                  color: '#fff',
                  fontSize: '1.5rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.blue.main,
                  }
                }} />
              </StyledBadge>
            </Link>

            <Tooltip title="Account settings">
              <IconButton 
                onClick={handleUserDrawerToggle}
                sx={{ p: 0 }}
              >
                <Avatar 
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    bgcolor: theme.palette.blue.main,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: theme.palette.blue.dark,
                    }
                  }}
                >
                  B
                </Avatar>
              </IconButton>
            </Tooltip>
          </IconGroup>
        </MobileToolbar>
      </MobileHeader>

      {/* Add spacing when mobile header is shown */}
      {isMobile && <Box sx={{ height: 64 }} />}

      {/* Desktop Navigation */}
      <Box sx={{ 
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        width: '100%'
      }}>
        <UpperNavBar />
        <MainNav isMobile={false} />
      </Box>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 320,
            boxSizing: 'border-box',
          },
        }}
      >
        {mobileDrawer}
      </Drawer>

      {/* User Account Drawer - Shared between mobile and desktop */}
      <Drawer
        anchor="left"
        open={userDrawerOpen}
        onClose={handleUserDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
          },
        }}
      >
        <UpperNavBar.UserDrawerContent onClose={handleUserDrawerToggle} />
      </Drawer>
    </NavContainer>
  );
} 