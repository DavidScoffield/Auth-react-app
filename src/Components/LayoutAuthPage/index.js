import React from 'react'
import './styles.css'

const LayoutAuthPage = ({ children, value }) => {
  return (
    <div className='layout__auth'>
      <div className='layout__auth-form'>{children}</div>
    </div>
  )
}

export default LayoutAuthPage
