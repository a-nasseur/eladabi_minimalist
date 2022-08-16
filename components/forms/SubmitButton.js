import React from 'react'
import { useFormikContext } from 'formik';
import { Oval } from 'react-loader-spinner';


import AppButton from '../AppButton';

const SubmitButton = ({ title, loading }) => {

  const { handleSubmit } = useFormikContext();

  return (
    <AppButton onClick={handleSubmit}>
      {loading ? <Oval  height = "20" width = "20" radius = "9" color = 'white' ariaLabel = 'three-dots-loading' wrapperStyle wrapperClass  /> : title}
    </AppButton>

  )
}

export default SubmitButton;