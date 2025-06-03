import { AppBar } from "@mui/material";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import React, {  useState, useEffect } from "react";
import customTheme from "../customTheme/customTheme";
import style from "./MainNavBar.module.css";

import { styled, alpha } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// menu
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Divider from "@mui/material/Divider";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Avatar from "@mui/material/Avatar";
import {  Collapse } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

// Mobile menu styles
const MobileMenuBox = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#e7f5ff55',
  boxShadow: '0 0 5px rgba(0, 123, 255, 0.4)',
  '& .menu-item': {
    width: '100%',
    padding: '12px 24px',
    color: 'black',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    textAlign: 'right',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(3, 124, 181, 0.15)',
      paddingRight: '32px',
    },
    '&.category-header': {
      color: customTheme.palette.blue.main,
      fontWeight: 'bold',
      fontSize: '1.1rem',
      borderBottom: '1px solid rgba(0, 123, 255, 0.4)',
      marginBottom: '4px',
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
  }
}));

// Add these constants at the top of the file
const LANGUAGE_FLAGS = {
  AR: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/2560px-Flag_of_Saudi_Arabia.svg.png",
    alt: "AR"
  },
  EN: {
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/330px-Flag_of_the_United_States.svg.png",
    alt: "EN"
  }
};

export default function MainNav({ isMobile, onClose }) {
  const [value, setValue] = React.useState(0);
  const [selectedLang, setSelectedLang] = useState('AR');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElProduct, setAnchorElProduct] = React.useState(null);
  const [anchorElService, setAnchorElService] = React.useState(null);
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState(null);
  
  // New state for mobile menu expansion
  const [expandedMenu, setExpandedMenu] = useState(null);
  
  const open = Boolean(anchorEl);
  const openProduct = Boolean(anchorElProduct);
  const openService = Boolean(anchorElService);
  const openServices = Boolean(anchorElServices);

  const navigate = useNavigate();

  // Effect to handle menu switching
  useEffect(() => {
    if (activeMenu) {
      // First close all menus
      setAnchorEl(null);
      setAnchorElProduct(null);
      setAnchorElService(null);
      setAnchorElServices(null);

      // Then open the active menu
      requestAnimationFrame(() => {
        switch(activeMenu.type) {
          case 'lang':
            setAnchorEl(activeMenu.element);
            break;
          case 'product':
            setAnchorElProduct(activeMenu.element);
            break;
          case 'service':
            setAnchorElService(activeMenu.element);
            break;
          case 'services':
            setAnchorElServices(activeMenu.element);
            break;
        }
      });
    }
  }, [activeMenu]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabClick = (event, tab) => {
    event.preventDefault();
    event.stopPropagation();

    // If tab has no menu, navigate and close the drawer
    if (tab === 'home') {
      navigate('/');
      if (onClose) {
        onClose();
      }
      return;
    }
    
    if (tab === 'contact') {
      navigate('/contactUs');
      if (onClose) {
        onClose();
      }
      return;
    }

    // For tabs with menus, toggle the menu
    handleMenuClick(event, tab);
  };

  const handleMenuItemClick = (event, path) => {
    // Navigate to the path
    
    
   
    if (path) {
     
      navigate(path);
    }
    
    // Close the drawer when a menu item is clicked
    if (onClose) {
      onClose();
    }
    setExpandedMenu(null);
  };

  const handleMenuClick = (event, menuType) => {
    event.preventDefault();
    event.stopPropagation();

    if (isMobile) {
      // For mobile, toggle the expanded menu
      setExpandedMenu(expandedMenu === menuType ? null : menuType);
      return;
    }

    // Desktop behavior remains the same
    if ((menuType === 'lang' && open) ||
        (menuType === 'product' && openProduct) ||
        (menuType === 'service' && openService) ||
        (menuType === 'services' && openServices)) {
      setActiveMenu(null);
      setAnchorEl(null);
      setAnchorElProduct(null);
      setAnchorElService(null);
      setAnchorElServices(null);
      return;
    }

    setActiveMenu({
      type: menuType,
      element: event.currentTarget
    });
  };

  const handleCloseLang = (lang) => {
    if (lang) {
      setSelectedLang(lang);
    }
    setActiveMenu(null);
    setAnchorEl(null);
    setExpandedMenu(null);
    // Close the drawer when language is selected
    if (onClose) {
      onClose();
    }
  };

  const handleCloseProduct = (product) => {
    if (product) {
      setSelectedProduct(product);
    }
    setActiveMenu(null);
    setAnchorElProduct(null);
  };

  const handleCloseService = () => {
    setActiveMenu(null);
    setAnchorElService(null);
  };

  const handleCloseServices = () => {
    setActiveMenu(null);
    setAnchorElServices(null);
  };



  // Main search input

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    transition: "all .5s ease-in-out",
    backgroundColor: alpha(theme.palette.blue.main, 0.1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.blue.main, 0.3),
      transition: "all .5s ease-in-out",
    },
    marginRight: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(1),
      width: "auto",
    },
    boxShadow: " 0 0 3px rgba(0, 123, 255, 0.4)",
    border: "solid  1px  black",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    left: "4%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    width: "100%",

    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingRight: `calc(1em + ${theme.spacing(2)})`,
    },
  }));

// Language Switch menu
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      borderTop:'5px solid #0334bb',
      marginTop: theme.spacing(1),
      minWidth: "auto",
      color:'#black',
      // backgroundColor:'#666a6cee',
      backgroundColor:'#ffffff77',
      backdropFilter: "blur(5px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
     

      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        position: 'relative',
        padding: '8px 16px',
        transition: 'all 0.4s ease-in-out',
       
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
          transition: 'all 0.5s ease-in-out',
        },
        "&:hover": {
          backgroundColor: 'rgba(3, 124, 181, 0.15)',
          "& .MuiSvgIcon-root": {
            color: '#037cb533',
            transform: 'scale(1.1)',
          },
         
        },
        "&:active": {
          backgroundColor: 'rgba(3, 124, 181, 0.1)',
          transform: 'scale(0.98)',
        },
        "&.Mui-selected": {
          backgroundColor: 'rgba(7, 152, 220, 0.4)',
         
          "&:hover": {
            backgroundColor: 'rgba(3, 124, 181, 0.2)',
          }
        }
      },
    },
  }));

  // Products Mega Menu
  const StyledMegaMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      borderTop:'5px solid #0334bb',
      marginTop: theme.spacing(1),
      // backgroundColor:'#666a6c99',
      backgroundColor:'#ffffff77',
      backdropFilter: "blur(5px)",
      color: '#fff',
      minWidth: '800px',
      padding: theme.spacing(2),
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      "& .category-container": {
        display: 'flex',
        gap: theme.spacing(3),
        padding: theme.spacing(1),
      },
      "& .category-column": {
        flex: 1,
      },
      "& .main-category": {
        fontSize: '1.2rem',
        padding: '12px',
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
        color: '#033477',
        borderBottom: '2px solid #0334bb',
        paddingBottom: theme.spacing(1),
        transition: 'all 0.5s ease-in-out',
        "&:hover": {
          color: '#031115',
          cursor:'pointer',
          borderRadius:'20%',
          transition: 'all 0.5s ease-in-out'
        }
      },
      "& .sub-category": {
        fontSize: '1rem',
        padding: '8px 16px',
        color: 'black',
        fontWeight:500,
        transition: 'all 0.4s ease-in-out',
        cursor: 'pointer',
        display: 'block',
        textDecoration: 'none',
        "&:hover": {
          backgroundColor: 'rgba(3, 124, 181, 0.15)',
          paddingRight: '25px',
          color: '#033477',
        },
        "&:active": {
          backgroundColor: 'rgba(3, 124, 181, 0.1)',
        }
      }
    },
  }));

  // Common styles for all tabs
  const commonTabStyles = {
    fontSize: {
      xs: "1rem",
      sm: "1.1rem",
      md: "0.9rem",
      lg: "1.1rem",
    },
    mx: {
      xs: 1,
      sm: 1.5,
      md: 0.5,
      lg: 1.5,
    },
    fontWeight: "bold",
    transition: "all .5s ease-in-out",
    "&:hover": {
      color: customTheme.palette.blue.main,
      "& svg": {
        transform: 'rotate(180deg)',
        color: customTheme.palette.blue.main,
      },
    },
    "& svg": {
      transition: "transform .5s ease-in-out",
      fontSize: {
        xs: "1rem",
        sm: "1.1rem",
        md: "0.9rem",
        lg: "1.1rem",
      },
    }
  };

  // Customer Service Menu
  const StyledServiceMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      borderTop:'5px solid #0334bb',
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: '#033477',
      // fontWeight:'bold',
      // backgroundColor:'#666a6cee',
      backgroundColor:'#ffffff77',
      backdropFilter: "blur(5px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        fontSize: '1rem',
        padding: '8px 16px',
        transition: 'all 0.4s ease-in-out',
        color:'#033477',
        fontWeight:'semibold',
        "&:hover": {
          backgroundColor: 'rgba(3, 124, 181, 0.15)',
          paddingRight: '25px',
        },
        "&:active": {
          backgroundColor: 'rgba(3, 124, 181, 0.1)',
        }
      },
    },
  }));

  return (
    <>
      <AppBar
        position="sticky"
        enableColorOnDark
        sx={{ 
          bgcolor: "transparent", 
          boxShadow: 0,
          p:2,
        

          ...(isMobile && {
            position: 'static',
            width: '100%',
           
            
          })
        }}
      >
        <Box sx={{ flexGrow: 1, width: "100%"}}>
          <Grid
            position="static"
            container
            sx={{
              bgcolor: "#e7f5ffaa",
              boxShadow: " 0 0 5px rgba(0, 123, 255, 0.4)",
              alignItems: "center",
              backdropFilter: "blur(4px)",

              width: "100%",
              borderRadius: "12px",
              px: { xs: 0.5, sm: 1, md: 0.5, lg: 1 },
              ...(isMobile && {
                flexDirection: 'column',
                alignItems: 'right',
                minHeight: "580px"
              })
            }}
            spacing={0}
          >
            {/* Main Nav Logo */}
            <Grid
              sx={{ 
                display: "flex", 
                justifyContent: "center", 
               
                py: { xs: 0.5, sm: 1, md: 0.5, lg: 1 },
                ...(isMobile && {
                  width: '100%',
                  flexDirection: 'column',
                  mb: 2
                })
              }}
              size={2}
            >
              <Box onClick={() => {
                navigate('/');
                if (onClose) onClose();
              }} sx={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                className={style.logoStyle}
                src="/rowadLogo.png"
                  width={isMobile ? "40%" : "60%"}
                alt="Logo image"
              />
              </Box>
              
              <Box
          sx={{
            display: isMobile ? "flex" : "none",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            m:2,
            justifyContent: "center",
          }}
        >
          <FacebookOutlinedIcon sx={{cursor:'pointer', color: "#1877F2", transition: 'all 0.5s ease-in-out',"&:hover": { transform: 'scale(1.1)' , transition: 'all 0.5s ease-in-out' } }} />
          <InstagramIcon sx={{cursor:'pointer', color: "#E1306C",   transition: 'all 0.5s ease-in-out',"&:hover": { transform: 'scale(1.1)' , transition: 'all 0.5s ease-in-out' } }} />
          <TwitterIcon sx={{cursor:'pointer', color: "#1DA1F2",  transition: 'all 0.5s ease-in-out',"&:hover": { transform: 'scale(1.1)' , transition: 'all 0.5s ease-in-out' } }} />
          <LinkedInIcon sx={{cursor:'pointer', color: "#0A66C2",  transition: 'all 0.5s ease-in-out',"&:hover": { transform: 'scale(1.1)' , transition: 'all 0.5s ease-in-out' } }} />
          <YouTubeIcon sx={{cursor:'pointer', color: "#FF0000",   transition: 'all 0.5s ease-in-out',"&:hover": { transform: 'scale(1.1)' , transition: 'all 0.5s ease-in-out' } }} />
        </Box>

            </Grid>

            {/* Nav Tabs */}
            <Grid size={7} sx={isMobile ? { width: '100%' } : { px: { md: 0.5 } }}>
              <Tabs
                sx={{ 
                  width: "100%",
                  '& .MuiTabs-flexContainer': {
                    gap: { md: '2px', lg: '8px' },
                    ...(isMobile && {
                      flexDirection: 'column',
                      
                    })
                  },
                  '& .MuiTab-root': {
                    ...(isMobile && {
                      textAlign: 'right',
                      justifyContent: 'right',
                      alignItems: 'right',
                      alignContent: 'right',
                     
                    })
                  }
                }}
                value={value}
                onChange={handleChange}
                aria-label="nav tabs"
                indicatorColor="primary"
                textColor="primary"
                orientation={isMobile ? "vertical" : "horizontal"}
                variant="scrollable"
                scrollButtons={false}
              >
                {/* الرئيسية */}
                <Tab
                component={Link}
                to="/"
                  onClick={(e) => handleTabClick(e, 'home')}
                  sx={{
                    ...commonTabStyles,
                    ...(isMobile && {
                      justifyContent: 'right',
                      width: '100%',
                      px: 2,
                      textAlign: 'right',
                      '& .MuiBox-root': {
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'right'
                      }
                    })
                  }}
                  label={
                    <Box>
                      الرئيسية
                    </Box>
                  }
                />
                
                {/* Products / منجاتنا */}
                <Tab
                  id="productButton"
                  aria-controls={openProduct ? 'productMenu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openProduct ? 'true' : undefined}
                  onClick={(e) => handleTabClick(e, 'product')}
                  sx={{
                    ...commonTabStyles,
                    ...(isMobile && {
                      justifyContent: 'space-between',
                      px: 2,
                      width: '100%'
                    })
                  }}
                  label={
                    <Box sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: 0.5,
                      width: '100%',
                      justifyContent: isMobile ? 'space-between' : 'center'
                    }}>
                      منتجاتنا
                      {isMobile ? (
                        expandedMenu === 'product' ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      ) : (
                        <KeyboardArrowDownIcon sx={{ fontSize: "1.2rem" }} />
                      )}
                    </Box>
                  }
                />
                {isMobile && (
                  <Collapse in={expandedMenu === 'product'}>
                    <MobileMenuBox>
                      <div 
                        className="menu-item"
                        onClick={() => handleMenuItemClick(null, 'officeFur')}
                        style={{
                          cursor: 'pointer'
                        }}
                      >
                        اثاث مكتبي
                      </div>
                      {[
                        'مكتب',
                        'كرسي مكتب',
                        'كنب مكتبي',
                        'دولاب مكتبي',
                        'طاولة إجتماع',
                        'رف',
                        'إكسسوارات مكتبية'
                      ].map((item) => (
                        <div 
                          key={item}
                          className="menu-item"
                          onClick={() => handleMenuItemClick(null, `officeFur`)}
                          style={{
                            cursor: 'pointer'
                          }}
                        >
                          {item}
                        </div>
                      ))}

                      {/* Home Furniture */}
                      <div 
                        className="menu-item category-header"
                        onClick={() => handleMenuItemClick(null, 'homeFur')}
                        style={{
                          cursor: 'pointer'
                        }}
                      >
                        أثاث منزلي
                      </div>
                      {[
                        'غرف نوم',
                        'غرف أطفال',
                        'خزانة ملابس',
                        'غرفة معيشة',
                        'كنب',
                        'كنب زاوية',
                        'رف ديكور',
                        'طاولة',
                        'كرسي',
                        'إكسسوارات منزلية'
                      ].map((item) => (
                        <div 
                          key={item}
                          className="menu-item"
                          onClick={() => handleMenuItemClick(null, `homeFur`)}
                          style={{
                            cursor: 'pointer'
                          }}
                        >
                          {item}
                        </div>
                      ))}

                      {/* Hotel Furniture */}
                      <div 
                        className="menu-item category-header"
                        onClick={() => handleMenuItemClick(null, 'hotelFur')}
                        style={{
                          cursor: 'pointer'
                        }}
                      >
                        أثاث فندقي
                      </div>
                      {[
                        'سرير',
                        'خزانة ملابس',
                        'كرسي',
                        'طاولة',
                        'كنب',
                        'مكتب إستقبال',
                        'خزانة ملفات'
                      ].map((item) => (
                        <div 
                          key={item}
                          className="menu-item"
                          onClick={() => handleMenuItemClick(null, `hotelFur`)}
                          style={{
                            cursor: 'pointer'
                          }}
                        >
                          {item}
                        </div>
                      ))}

                      {/* Educational Furniture */}
                      <div 
                        className="menu-item category-header"
                        onClick={() => handleMenuItemClick(null, '/learnFur')}
                        style={{
                          cursor: 'pointer'
                        }}
                      >
                        أثاث تعليمي
                      </div>
                      {[
                        'طاولة دراسة',
                        'مكاتب مدرسين',
                        'مكاتب إدارية',
                        'مكتبة',
                        'كرسي',
                        'طاولة كمبيوتر',
                        'مدرجات',
                        'ستاند'
                      ].map((item) => (
                        <div 
                          key={item}
                          className="menu-item"
                          onClick={() => handleMenuItemClick(null, `/learnFur`)}
                          style={{
                            cursor: 'pointer'
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </MobileMenuBox>
                  </Collapse>
                )}

                {/* خدمة العملاء */}
                <Tab
                  id="serviceButton"
                  aria-controls={openService ? 'serviceMenu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openService ? 'true' : undefined}
                  onClick={(e) => handleTabClick(e, 'service')}
                  sx={{
                    ...commonTabStyles,
                    ...(isMobile && {
                      justifyContent: 'space-between',
                      px: 2,
                      width: '100%'
                    })
                  }}
                  label={
                    <Box sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: 0.5,
                      width: '100%',
                      justifyContent: isMobile ? 'space-between' : 'center'
                    }}>
                      خدمة العملاء
                      {isMobile ? (
                        expandedMenu === 'service' ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      ) : (
                        <KeyboardArrowDownIcon sx={{ fontSize: "1.2rem" }} />
                      )}
                    </Box>
                  }
                />
                {isMobile && (
                  <Collapse in={expandedMenu === 'service'}>
                    <MobileMenuBox>
                      <div 
                        className="menu-item"
                        onClick={() => handleMenuItemClick(null, '/faq')}
                        style={{
                          cursor: 'pointer'
                        }}
                      >
                        FAQ
                      </div>
                      <div 
                        className="menu-item"
                        onClick={() => handleMenuItemClick(null, '/inquiry')}
                        style={{
                          cursor: 'pointer'
                        }}
                      >
                        أرسل طلب/ إستفسار
                      </div>
                    </MobileMenuBox>
                  </Collapse>
                )}

                {/* خدماتنا */}
                <Tab
                  id="servicesButton"
                  aria-controls={openServices ? 'servicesMenu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openServices ? 'true' : undefined}
                  onClick={(e) => handleTabClick(e, 'services')}
                  sx={{
                    ...commonTabStyles,
                    ...(isMobile && {
                      justifyContent: 'space-between',
                      px: 2,
                      width: '100%'
                    })
                  }}
                  label={
                    <Box sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: 0.5,
                      width: '100%',
                      justifyContent: isMobile ? 'space-between' : 'center'
                    }}>
                      خدماتنا
                      {isMobile ? (
                        expandedMenu === 'services' ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      ) : (
                        <KeyboardArrowDownIcon sx={{ fontSize: "1.2rem" }} />
                      )}
                    </Box>
                  }
                />
                {isMobile && (
                  <Collapse in={expandedMenu === 'services'}>
                    <MobileMenuBox>
                      {[
                        { to: 'assemblyService', label: 'خدمة فك وتركيب' },
                        { to: 'maintenance', label: 'خدمة الصيانة' },
                        { to: 'after-sale', label: 'خدمة ما بعد البيع' },
                        { to: 'delivery', label: 'خدمة توصيل' }
                      ].map((item) => (
                        <div 
                          key={item.to}
                          className="menu-item"
                          onClick={() => handleMenuItemClick(null, item.to)}
                          style={{
                            cursor: 'pointer'
                          }}
                        >
                          {item.label}
                        </div>
                      ))}
                    </MobileMenuBox>
                  </Collapse>
                )}

                {/* تواصل معنا */}
                <Tab
                  component={Link}
                  to="contactUs"
                  onClick={(e) => handleTabClick(e, 'contact')}
                  sx={{
                    ...commonTabStyles,
                    ...(isMobile && {
                      justifyContent: 'right',
                      width: '100%',
                      px: 2,
                      textAlign: 'right',
                      '& .MuiBox-root': {
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'right'
                      }
                    })
                  }}
                  label={
                    <Box>
                      تواصل معنا
                    </Box>
                  }
                />
              </Tabs>
            </Grid>

            {/* Search in nav */}
            <Grid
              sx={{ 
                justifyContent: "center", 
                justifyItems: "center",
                ...(isMobile && {
                  width: '100%',
                  mt: 2,
                  mb: 2
                }),
                px: { md: 0.5 }
              }}
              size={2}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ fontSize: { md: '1.2rem' } }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="بحث..."
                  inputProps={{ 
                    "aria-label": "search",
                    style: {
                      fontSize: '0.9rem',
                      padding: '8px 8px 8px 0'
                    }
                  }}
                />
              </Search>
            </Grid>

            {/* Change language menu */}
            <Grid item size={1} sx={isMobile ? { 
                width: '100%', 
                mb: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              } : { 
                px: { md: 0.5 } ,
              
              }}>
              <div style={{ 
                width: isMobile ? '80%' : '100%',
                position: 'relative'
              }}>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={(e) => handleMenuClick(e, 'lang')}
                  sx={{ 
                    bgcolor: "#037cb510", 
                    // border: " 1px solid ",
                    boxShadow: " 0 0 7px rgba(0, 123, 255, 0.4)",
                    // border: "solid  1px  black",
                    width: '100%',
                    p: { md: 0.5 }
                  }}
                >
                  <Avatar
                    alt={LANGUAGE_FLAGS[selectedLang].alt}
                    src={LANGUAGE_FLAGS[selectedLang].src}
                    sx={{ width: { md: 24 ,lg: 40 }, height: { md: 24 ,lg: 40 } }}
                  />
                  <KeyboardArrowDownIcon 
                    sx={{ 
                      color: "black", 
                      fontSize: { md: '1.2rem' },
                      transform: expandedMenu === 'lang' ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                </Button>

                {/* Language menu items */}
                {isMobile ? (
                  <Collapse in={expandedMenu === 'lang'}>
                    <MobileMenuBox>
                      <div 
                        className="menu-item"
                        onClick={() => handleCloseLang('AR')}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: selectedLang === 'AR' ? 'rgba(3, 124, 181, 0.15)' : 'transparent'
                        }}
                      >
                        <Avatar
                          sx={{ mx: 1 }}
                          alt="AR"
                          src={LANGUAGE_FLAGS.AR.src}
                        />
                        AR
                      </div>
                      <Divider sx={{ my: 0.5 }} />
                      <div 
                        className="menu-item"
                        onClick={() => handleCloseLang('EN')}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: selectedLang === 'EN' ? 'rgba(3, 124, 181, 0.15)' : 'transparent'
                        }}
                      >
                        <Avatar
                          sx={{ mx: 1 }}
                          alt="EN"
                          src={LANGUAGE_FLAGS.EN.src}
                        />
                        EN
                      </div>
                    </MobileMenuBox>
                  </Collapse>
                ) : (
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                    onClose={() => handleCloseLang()}
                  >
                    <MenuItem 
                      onClick={() => handleCloseLang('AR')} 
                      disableRipple
                      selected={selectedLang === 'AR'}
                    >
                    AR
                    <Avatar
                      sx={{ mx: 1 }}
                      alt="AR"
                        src={LANGUAGE_FLAGS.AR.src}
                    />
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                    <MenuItem 
                      onClick={() => handleCloseLang('EN')} 
                      disableRipple
                      selected={selectedLang === 'EN'}
                    >
                    EN
                    <Avatar
                      sx={{ mx: 1 }}
                      alt="EN"
                        src={LANGUAGE_FLAGS.EN.src}
                    />
                  </MenuItem>
                </StyledMenu>
                )}
              </div>
            </Grid>
          </Grid>
        </Box>
      </AppBar>

      {/* Only render popup menus for desktop */}
      {!isMobile && (
        <>
          <StyledMegaMenu
            id="productMenu"
            anchorEl={anchorElProduct}
            open={openProduct}
            onClose={() => handleCloseProduct()}
            MenuListProps={{
              'aria-labelledby': 'productButton',
            }}
          >
            <div className="category-container">
              {/* Office Furniture */}
              <div className="category-column">
                <Link 
                  to="/officeFur" 
                  className="main-category"
                  onClick={() => handleCloseProduct()}
                  style={{ textDecoration: 'none' }}
                >
                  اثاث مكتبي
                </Link>
                {[
                  'مكتب',
                  'كرسي مكتب',
                  'كنب مكتبي',
                  'دولاب مكتبي',
                  'طاولة إجتماع',
                  'رف',
                  'إكسسوارات مكتبية'
                ].map((item) => (
                  <Link
                    key={item}
                    to={`/officeFur`}
                    className="sub-category"
                    onClick={() => handleCloseProduct()}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Home Furniture */}
              <div className="category-column">
                <Link 
                  to="/homeFur" 
                  className="main-category"
                  onClick={() => handleCloseProduct()}
                  style={{ textDecoration: 'none' }}
                >
                  أثاث منزلي
                </Link>
                {[
                  'غرف نوم',
                  'غرف أطفال',
                  'خزانة ملابس',
                  'غرفة معيشة',
                  'كنب',
                  'كنب زاوية',
                  'رف ديكور',
                  'طاولة',
                  'كرسي',
                  'إكسسوارات منزلية'
                ].map((item) => (
                  <Link
                    key={item}
                    to={`/homeFur`}
                    className="sub-category"
                    onClick={() => handleCloseProduct()}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Hotel Furniture */}
              <div className="category-column">
                <Link 
                  to="/hotelFur" 
                  className="main-category"
                  onClick={() => handleCloseProduct()}
                  style={{ textDecoration: 'none' }}
                >
                  أثاث فندقي
                </Link>
                {[
                  'سرير',
                  'خزانة ملابس',
                  'كرسي',
                  'طاولة',
                  'كنب',
                  'مكتب إستقبال',
                  'خزانة ملفات'
                ].map((item) => (
                  <Link
                    key={item}
                    to={`/hotelFur`}
                    className="sub-category"
                    onClick={() => handleCloseProduct()}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Educational Furniture */}
              <div className="category-column">
                <Link 
                  to="learnFur" 
                  className="main-category"
                  onClick={() => handleCloseProduct()}
                  style={{ textDecoration: 'none' }}
                >
                  أثاث تعليمي
                </Link>
                {[
                  'طاولة دراسة',
                  'مكاتب مدرسين',
                  'مكاتب إدارية',
                  'مكتبة',
                  'كرسي',
                  'طاولة كمبيوتر',
                  'مدرجات',
                  'ستاند'
                ].map((item) => (
                  <Link
                    key={item}
                    to={`/learnFur`}
                    className="sub-category"
                    onClick={() => handleCloseProduct()}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </StyledMegaMenu>

          <StyledServiceMenu
            id="serviceMenu"
            anchorEl={anchorElService}
            open={openService}
            onClose={handleCloseService}
            MenuListProps={{
              'aria-labelledby': 'serviceButton',
            }}
          >
            <MenuItem 
              component={Link} 
              to="faq"
              onClick={handleCloseService}
              style={{ textDecoration: 'none' }}
            >
              FAQ
            </MenuItem>
            <MenuItem 
              component={Link} 
              to="inquiry"
              onClick={handleCloseService}
              style={{ textDecoration: 'none' }}
            >
              أرسل طلب/ إستفسار
            </MenuItem>
          </StyledServiceMenu>

          <StyledServiceMenu
            id="servicesMenu"
            anchorEl={anchorElServices}
            open={openServices}
            onClose={handleCloseServices}
            MenuListProps={{
              'aria-labelledby': 'servicesButton',
            }}
          >
            <MenuItem 
              component={Link} 
              to="assemblyService"
              onClick={handleCloseServices}
              style={{ textDecoration: 'none' }}
            >
              خدمة فك وتركيب
            </MenuItem>
            <MenuItem 
              component={Link} 
              to="maintenance"
              onClick={handleCloseServices}
              style={{ textDecoration: 'none' }}
            >
              خدمة الصيانة
            </MenuItem>
            <MenuItem 
              component={Link} 
              to="after-sale"
              onClick={handleCloseServices}
              style={{ textDecoration: 'none' }}
            >
              خدمة ما بعد البيع
            </MenuItem>
            <MenuItem 
              component={Link} 
              to="delivery"
              onClick={handleCloseServices}
              style={{ textDecoration: 'none' }}
            >
              خدمة توصيل
            </MenuItem>
          </StyledServiceMenu>
        </>
      )}
    </>
  );
}
