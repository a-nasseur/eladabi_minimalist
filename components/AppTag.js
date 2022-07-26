import React from 'react'
import { Box, Container, styled } from '@mui/material'


import colors from '../config/colors';
import AppTextCaption from './AppTextCaption';


const TagContainer = styled(Box)(({ theme }) => ({
    marginRight: 4,
    marginBottom: 4,
    minHeight: '40px',
    width: '61px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral.grey,
    color: colors.neutral.darkGrey,
    transition: 'all .4s',
    '&:hover': {
      backgroundColor: colors.neutral.darkGrey,
      color: colors.neutral.lightGrey
    }
  }));
  

const AppTag = ({ title }) => {
  return (
    <>
      <TagContainer><AppTextCaption>#{title && title}</AppTextCaption></TagContainer>        
    </>
  )
}

export default AppTag;