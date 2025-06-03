import React, { useState } from 'react'

import { Box, Typography } from '@mui/material'
import customTheme from '../customTheme/customTheme'





export default function EndNav() {

const [counter, setcounter] = useState(0)

  return <>
  
<Box sx={{
   bgcolor: customTheme.palette.dark1.main,
  color: 'white',
  padding: 2,
  textAlign: 'center',
}}>
  <Typography variant="h6">ترقبو المزيد عن رواد البنيان قريبا</Typography>
  <Typography variant="h6">الموقع تحت التطوير</Typography>
  {/* <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</Typography> */}
</Box>


  </>
}
