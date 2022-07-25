import { Typography } from '@mui/material'
import React from 'react'




const AppTextBodyLight = ({ children, style}) => {
  return (
    <Typography
        variant='body1'
        fontSize='16px'
        fontFamily='Roboto-mono, monospace'
        sx={style}
        fontWeight={300}
        lineHeight='24px'
        
    >
        {children}
    </Typography>
  )
}

export default AppTextBodyLight;