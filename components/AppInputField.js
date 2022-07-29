import React from 'react'
import { InputBase, styled } from '@mui/material'


import colors from '../config/colors';
import AppTextCaption from './AppTextCaption';


const SearchBox = styled(InputBase)(({ theme }) => ({
    position: 'relative',
    width: '216px',
    height: '40px',
    backgroundColor: colors.neutral.grey,
    border: 'none',
    borderRadius: '3px',
    padding: '0px 20px',
    fontSize: '14px',
    fontFamily: 'Roboto Mono, monospace',
}));


const AppInputField = ({ placeholder, ...otherProps}) => {
  return (
    <>
      <SearchBox placeholder={placeholder} {...otherProps} />
    </>
  )
}

export default AppInputField