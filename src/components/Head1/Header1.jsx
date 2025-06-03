import React, { useState } from 'react'
import style from './Head1.module.css'

import  { useEffect } from 'react';
import { Box, Typography, Container, Grid, useTheme } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Header1() {

  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return <>
  
  <Box
        data-aos="fade-up"
        sx={{
          textAlign: 'center',
          my: 6
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            mb: 3,
            textShadow: '1px 1px 1px rgba(41, 14, 249, 0.5)',
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          نقدم مجموعة متنوعة من المنتجات المختلفة لتلبية احتياجاتك
        </Typography> 
        </Box>
 

  </>
}
