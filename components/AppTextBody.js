import { Typography } from '@mui/material'
import React from 'react'



const AppTextBody = ({ children, style}) => {
  return (
    <Typography
        variant='body1'
        fontSize='16px'
        fontFamily='Roboto-mono, monospace'
        sx={style}
        fontWeight={500}
        letterSpacing={2}
        lineHeight='32px'

    >
    <div dangerouslySetInnerHTML={{__html: `${children}`}} />

    </Typography>
  )
}

export default AppTextBody;