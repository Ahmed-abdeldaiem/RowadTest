import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import style from './HomeLayout.module.css'
import ResponsiveNavBar from '../ResponsiveNavBar/ResponsiveNavBar'

import { Box } from '@mui/material'
import SwiperHome from '../MainSwiper/SwiperHome'
import EndNav from '../EndNav/EndNav'


export default function HomeLayout() {
  const [counter, setcounter] = useState(0)

  return (
    <>
      <Box sx={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1200,
        backgroundColor: 'transparent'
      }}>
        <ResponsiveNavBar />
      </Box>
      
      <Box>
  <SwiperHome />
      </Box>

      <Outlet />
      <EndNav/>
    </>
  )
}
