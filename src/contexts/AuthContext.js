import React, { createContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [jwt, setJWT] = useState(() => {
    window.sessionStorage.getItem('jwt')
  })

  return <AuthContext.Provider value={{ jwt, setJWT }}>{children}</AuthContext.Provider>
}
export default AuthContext
