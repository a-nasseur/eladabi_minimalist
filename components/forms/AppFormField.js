import React from 'react'
import { useFormikContext } from 'formik';


import AppInputField from '../AppInputField';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, ...otherProps}) => {

  const {setFieldTouched, handleChange, errors, touched} =  useFormikContext();

  return (
    <div style={{ margin: '24px 0px'}}>
      <AppInputField 
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)} 
        {...otherProps }

        /> 
      <ErrorMessage error={errors[name]} visible={touched[name]} />   
    </div>
  )
}

export default AppFormField