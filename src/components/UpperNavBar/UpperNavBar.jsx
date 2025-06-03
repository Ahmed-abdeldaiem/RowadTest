import React, { useState } from "react";
import style from "./UpperNavBar.module.css";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
// list
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// icons
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CloseIcon from "@mui/icons-material/Close";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Drawer from "@mui/material/Drawer";
import customTheme from "../customTheme/customTheme";

import Badge from "@mui/material/Badge";
import Divider, { dividerClasses } from "@mui/material/Divider";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

// Extract drawer content to a separate component
const UserDrawerContent = ({ onClose }) => (
  <Box
    sx={{
      width: 320,
      height: "100%",
      bgcolor: customTheme.palette.gray.main,
      position: "relative",
    }}
    role="presentation"
  >
    {/* Close Button */}
    <IconButton
      onClick={onClose}
      sx={{
        position: "absolute",
        left: 8,
        top: 8,
        bgcolor: customTheme.palette.dark1.main,
        color: "#fff",
        "&:hover": {
          bgcolor: customTheme.palette.dark2.main,
        },
        transition: "all 0.3s ease-in-out",
        zIndex: 1,
      }}
    >
      <CloseIcon />
    </IconButton>

    <List sx={{ bgcolor: "#fff", pt: 5 }}>
      <ListItem sx={{ display: "flex", paddingRight: "2rem" }}>
        <ListItemIcon>
          <Avatar
            sx={{
              width: 48,
              height: 48,
              bgcolor: customTheme.palette.blue.main,
            }}
          >
            M
          </Avatar>
        </ListItemIcon>
        <ListItemText
          sx={{ textAlign: "right", paddingRight: "1.2rem" }}
          primary="إسم الزائر"
        />
      </ListItem>
    </List>

    <Divider />

    <List>
      <Box
        sx={{
          border: "solid 1px gray",
          transition: "all .6s ease-in-out",
          "&:hover": {
            borderColor: customTheme.palette.blue.main,
            transition: "all .6s ease-in-out",
          },
          borderRadius: "12px",
          mx: 2,
          my: 2,
          bgcolor: "#fff",
        }}
      >
        {/* login */}
        <ListItem
          sx={{
            transition: "all .6s ease-in-out",
            "&:hover *": {
              color: customTheme.palette.blue.main,
              transition: "all .5s ease-in-out",
            },
          }}
          disablePadding
        >
          <ListItemButton LinkComponent={Link} to="login" onClick={onClose}>
            <ListItemText
              sx={{ textAlign: "center", transition: "all .6s ease-in-out" }}
              primary="تسجيل دخول"
            />
            <ListItemIcon>
              <LoginIcon sx={{ transition: "all .6s ease-in-out" }} />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        {/* register */}
        <ListItem
          sx={{
            transition: "all .6s ease-in-out",
            "&:hover *": {
              color: customTheme.palette.blue.main,
              transition: "all .5s ease-in-out",
            },
          }}
          disablePadding
        >
          <ListItemButton LinkComponent={Link} to="register" onClick={onClose}>
            <ListItemText
              sx={{ textAlign: "center", transition: "all .6s ease-in-out" }}
              primary="تسجيل جديد"
            />
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Box>
    </List>

    <List>
      <Box
        sx={{
          border: "solid 1px gray",
          transition: "all .6s ease-in-out",
          "&:hover": {
            borderColor: customTheme.palette.blue.main,
            transition: "all .6s ease-in-out",
          },
          borderRadius: "12px",
          mx: 2,
          my: 2,
          bgcolor: "#fff",
        }}
      >
        {/* المفضلة */}
        <ListItem
          sx={{
            transition: "all .6s ease-in-out",
            "&:hover *": {
              color: customTheme.palette.blue.main,
              transition: "all .5s ease-in-out",
            },
          }}
          disablePadding
        >
          <ListItemButton LinkComponent={Link} to="favorite" onClick={onClose}>
            <ListItemText
              sx={{ textAlign: "center", transition: "all .6s ease-in-out" }}
              primary="المفضلة (4)"
            />
            <ListItemIcon>
              <FavoriteIcon
                sx={{ color: "red", transition: "all .5s ease-in-out" }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        {/*عربة التسوق  */}
        <ListItem
          sx={{
            transition: "all .6s ease-in-out",
            "&:hover *": {
              color: customTheme.palette.blue.main,
              transition: "all .5s ease-in-out",
            },
          }}
          disablePadding
        >
          <ListItemButton LinkComponent={Link} to="cart" onClick={onClose}>
            <ListItemText
              sx={{ textAlign: "center", transition: "all .6s ease-in-out" }}
              primary="عربة التسوق (4)"
            />
            <ListItemIcon>
              <ShoppingCartIcon
                sx={{ color: "black", transition: "all .5s ease-in-out" }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Box>
    </List>

    <Divider />
    <List>
      {/* logout */}
      <ListItem
        sx={{
          transition: "all .6s ease-in-out",
          "&:hover *": {
            color: "black",
            transition: "all .5s ease-in-out",
          },
        }}
        disablePadding
      >
        <ListItemButton LinkComponent={Link} to="logout" onClick={onClose}>
          <ListItemText
            sx={{
              color: customTheme.palette.dark2.main,
              textAlign: "center",
              transition: "all .5s ease-in-out",
            }}
            primary="تسجيل خروج"
          />
          <ListItemIcon>
            <LogoutIcon sx={{ transition: "all .5s ease-in-out" }} />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
    <Divider />

    <List>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "2rem",
        }}
        disablePadding
      >
        <img src="/rowadLogoNoBG.png" alt="Logo Image" />
      </ListItem>
    </List>
  </Box>
);

function UpperNavBar({ isMobile }) {
  const [drawerState, setDrawerState] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  return (
    <AppBar
      position="static"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        backgroundImage: "none",
        bgcolor: customTheme.palette.dark1.main,
        display: { xs: isMobile ? "block" : "none", md: "block" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          py: isMobile ? 2 : 0,
        }}
        maxWidth="lg"
      >
        {/* right section links  */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: isMobile ? "center" : "start",
            alignItems: "center",
            px: 0,
            flexWrap: "wrap",
          }}
        >
          {/* Category buttons - right section  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              width: isMobile ? "100%" : "auto",
            }}
          >
            {/* Category buttons */}
            {[
              { label: "أثاث مكتبي", to: "officeFur" },
              { label: "أثاث منزلي", to: "homeFur" },
              { label: "أثاث فنادق", to: "hotelFur" },
              { label: "أثاث تعليمي", to: "learnFur" },
            ].map((item, index) => (
              <React.Fragment key={item.to}>
                {!isMobile && (
                  <Divider
                    orientation="vertical"
                    sx={{ bgcolor: customTheme.palette.blue.main }}
                    flexItem
                  />
                )}
                <Button
                  LinkComponent={Link}
                  to={item.to}
                  variant="text"
                  color="inherit"
                  size="medium"
                  className={style.upNavLink}
                  sx={{
                    width: isMobile ? "100%" : "auto",
                    justifyContent: "center",
                    py: isMobile ? 1 : 0,
                    borderBottom: isMobile
                      ? `1px solid ${customTheme.palette.blue.main}`
                      : "none",
                  }}
                >
                  {item.label}
                </Button>
              </React.Fragment>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: isMobile ? "none" : "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FacebookOutlinedIcon sx={{cursor:'pointer', color: "#1877F2", transition: 'all 0.5s ease-in-out',"&:hover": { transform: 'scale(1.1)' , transition: 'all 0.5s ease-in-out' } }} />
          <InstagramIcon sx={{cursor:'pointer', color: "#E1306C",   transition: 'all 0.5s ease-in-out',"&:hover": { transform: 'scale(1.1)' , transition: 'all 0.5s ease-in-out' } }} />
          <TwitterIcon sx={{cursor:'pointer', color: "#1DA1F2",  transition: 'all 0.5s ease-in-out',"&:hover": { transform: 'scale(1.1)' , transition: 'all 0.5s ease-in-out' } }} />
          <LinkedInIcon sx={{cursor:'pointer', color: "#0A66C2",  transition: 'all 0.5s ease-in-out',"&:hover": { transform: 'scale(1.1)' , transition: 'all 0.5s ease-in-out' } }} />
          <YouTubeIcon sx={{cursor:'pointer', color: "#FF0000",   transition: 'all 0.5s ease-in-out',"&:hover": { transform: 'scale(1.1)' , transition: 'all 0.5s ease-in-out' } }} />
        </Box>

        {/* left section links  */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: isMobile ? "center" : "end",
            alignItems: "center",
            px: 0,
            mt: isMobile ? 2 : 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 2 : 0,
            }}
          >
            {/* Favorite */}
            <Badge badgeContent={'0'} sx={{ top: 6, mx: 2, my: 0 }} color="error">
              <Link to="favorite">
                <FavoriteIcon
                  sx={{
                    fontSize: "1.7rem",
                    mx: 1,
                    color: "primary.main",
                    transition: "all 0.6s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      color: "red",
                    },
                  }}
                />
              </Link>
            </Badge>

            {/* cart */}
            <Badge badgeContent={'0'} sx={{ top: 6, mx: 2, my: 1 }} color="error">
              <Link to="cart">
                <ShoppingCartIcon
                  sx={{
                    fontSize: "1.7rem",
                    mx: 1,
                    color: "primary.main",
                    transition: "all 0.6s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      color: "black",
                    },
                  }}
                />
              </Link>
            </Badge>

            {/* menu for login and logout */}
            <Tooltip title="Account settings">
              <IconButton
                onClick={toggleDrawer("right", true)}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32, bgcolor: "black" }}>
                  B
                </Avatar>
              </IconButton>
            </Tooltip>

            {/* Side Registration menu */}
            <Drawer
              anchor="left"
              open={drawerState["right"]}
              onClose={toggleDrawer("right", false)}
            >
              <UserDrawerContent onClose={toggleDrawer("right", false)} />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

// Attach the UserDrawerContent component to UpperNavBar
UpperNavBar.UserDrawerContent = UserDrawerContent;

export default UpperNavBar;
