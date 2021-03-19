import React from 'react'
import LayoutAuthPage from '../LayoutAuthPage'
import Register from '../Register'
import Login from '../Login'

const App = () => {
  return (
    <LayoutAuthPage>
      {/* <Register /> */}
      <Login />
    </LayoutAuthPage>
  )
}

export default App
