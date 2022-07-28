import React from 'react'
import { styled } from '@mui/material'


import colors from '../config/colors';


const SearchBox = styled('input')(({ theme }) => ({
    position: 'relative',
    width: '216px',
    height: '40px',
    backgroundColor: colors.neutral.grey,
    border: 'none',
    padding: '0px 20px',
    fontFamily: 'Roboto Mono, monospace',
    '&:active': {
        border: 'none'
    },
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));


const AppInputField = ({ placeholder, ...otherProps}) => {
  return (
    <SearchBox placeholder={placeholder}  {...otherProps} />
  )
}

export default AppInputField