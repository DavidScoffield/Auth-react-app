import { useCallback, useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import loginService from '../services/login'
import registerService from '../services/register'

const useUser = () => {
  const { jwt, setJWT } = useContext(AuthContext)

  const login = useCallback(
    ({ email, password }) => {
      loginService({ email, password })
        .then((jwt) => {
          window.sessionStorage.setItem('jwt', jwt)
          setJWT(jwt)
        })
        .catch(() => {
          window.sessionStorage.removeItem('jwt')
          setJWT(null)
        })
    },
    [setJWT]
  )

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  const register = useCallback(
    ({ email, password, dni }) => {
      registerService({ email, password, dni })
        .then((jwt) => {
          window.sessionStorage.setItem('jwt', jwt)
          setJWT(jwt)
        })
        .catch(() => {
          window.sessionStorage.removeItem('jwt')
          setJWT(null)
        })
    },
    [setJWT]
  )

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    register,
  }
}

export default useUser
