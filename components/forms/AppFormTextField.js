import { styled, TextField, FormControl } from '@mui/material'
import React from 'react'

import colors from '../../config/colors';

const CustomTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: colors.neutral.lightGrey,
    borderRadius: '3px',
    borderBottom: 'none',
    fontFamily: 'Roboto-mono, monospace',
    '&:focus': {
        border: 'none'
    },
    '&:hover': {
        backgroundColor: 'none'
    }

    
}));

const AppFormTextField = ({ placeholder }) => {
  return (
    <FormControl sx={{ marginTop: '38px', marginBottom: '24px', width: '100%' }}>
        <CustomTextField 
            variant='filled'
            multiline
            placeholder={placeholder}
            rows={6}
        />
    </FormControl>
  )
}

export default AppFormTextField;