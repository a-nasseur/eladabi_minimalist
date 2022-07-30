import { styled, TextField, FormControl } from '@mui/material'
import React from 'react'
import { useFormikContext } from 'formik';

import colors from '../../config/colors';
import ErrorMessage from './ErrorMessage';

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

const AppFormTextField = ({name, placeholder }) => {

    const {setFieldTouched, handleChange, errors, touched} =  useFormikContext();


  return (
    <FormControl sx={{ marginTop: '38px', marginBottom: '24px', width: '100%' }}>
        <CustomTextField 
            variant='filled'
            multiline
            placeholder={placeholder}
            rows={6}
            onChange={handleChange(name)}
            onBlur={() => setFieldTouched(name)} 
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />   
    </FormControl>
  )
}

export default AppFormTextField;