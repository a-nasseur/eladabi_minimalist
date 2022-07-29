import { ButtonBase, styled } from '@mui/material'
import React from 'react'

import colors from '../config/colors';

const CustomButton = styled(ButtonBase)(({ theme }) => ({
    backgroundColor: colors.neutral.darkGrey,
    color: colors.white,
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '1rem',
    width: 88,
    height: 44,
    transition: 'all .4s',
    borderRadius: '3px',
    '&:hover': {
        backgroundColor: colors.black
    }
}));

const AppButton = ({ children, onClick }) => {
  return (
    <CustomButton onClick={onClick}>{children}</CustomButton>
  )
}

export default AppButton