// theme.js
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    blue: {
      main: '#037cb5', 
    },
    dark1: {
      main: '#4a4f53', 
      trans: '#4a4f53aa'
    },
    dark2: {
      main: '#666a6c', 
    },
    gray:{
      // main:'#e9ecef'
      main:'#037cb511'
    }
  },
});

export default customTheme;
