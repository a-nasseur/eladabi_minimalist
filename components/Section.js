import { Container} from '@mui/material'
import React from 'react'


const Section = ({ children }) => {
  return (
    <Container maxWidth='md' sx={{ marginTop: '96px' , marginBottom: '96px', height: 'inherit'}}>
        {children}
    </Container>
  )
}

export default Section