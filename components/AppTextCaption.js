import { Typography } from '@mui/material'
import React from 'react'




const AppTextCaption = ({ children, style}) => {
  return (
    <Typography
        variant='body1'
        fontSize='12px'
        fontFamily='Roboto-mono, monospace'
        sx={style}
        fontWeight={500}
        lineHeight='14px'

    >
        {children}
    </Typography>
  )
}

export default AppTextCaption;