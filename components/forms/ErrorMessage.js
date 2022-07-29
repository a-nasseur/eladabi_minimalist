import React from 'react'

import colors from '../../config/colors'
import AppTextCaption from '../AppTextCaption'

const ErrorMessage = ({ visible, error }) => {

  if(!visible || !error) return null

  return (
    <AppTextCaption 
        style={{ 
            color: colors.semantic.error, 
            padding: '15px 0px',
            transition: 'all .3s'
        }}
        >
            {error}
        </AppTextCaption>
  )
}

export default ErrorMessage