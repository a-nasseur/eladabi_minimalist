import { Typography } from '@mui/material'
import React from 'react'


const AppHeading = ({ children, style}) => {
  return (
    <Typography
        variant='h1'
        fontSize='24px'
        fontFamily='Roboto-mono, monospace'
        sx={style}
        fontWeight={500}
        
    >
        {children}
    </Typography>
  )
}

export default AppHeading;