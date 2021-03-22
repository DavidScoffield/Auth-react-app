import React from 'react'
import { useHistory } from 'react-router'
import useUser from '../../hooks/useUser'

const ProtectedComponent = (params) => {
  const { logout } = useUser()
  const history = useHistory()

  const click = (e) => {
    logout()
    history.push('/login')
  }

  return (
    <>
      <p>PROTECTED COMPONENT</p>
      <button onClick={click}>LOG OUT</button>
    </>
  )
}

export default ProtectedComponent
