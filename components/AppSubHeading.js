import React from 'react'
import { Typography } from '@mui/material';


const AppSubHeading = ({ children, style}) => {
    return (
      <Typography
          variant='h1'
          fontSize='19px'
          fontFamily='Roboto-mono, monospace'
          sx={style}
          fontWeight={500}
          
      >
          {children}
      </Typography>
    )
  }
  
  export default AppSubHeading;