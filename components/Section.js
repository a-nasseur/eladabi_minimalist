import { Container, styled} from '@mui/material'
import React from 'react'


const SectionContainer = styled(Container)(({ theme }) => ({
  marginTop: '96px' , 
  marginBottom: '96px', 
  height: 'inherit',
  [theme.breakpoints.down('md')]: {
    padding: '0px 30px'
  }
}));


const Section = ({ children }) => {
  return (
    <SectionContainer 
      maxWidth='md'       
    >
        {children}
    </SectionContainer>
  )
}

export default Section