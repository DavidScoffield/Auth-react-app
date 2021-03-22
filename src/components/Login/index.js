import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import LayoutAuthPage from '../LayoutAuthPage'
import '../Register/styles.css'
import useUser from '../../hooks/useUser'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLogged } = useUser()
  let history = useHistory()

  useEffect(() => {
    isLogged && history.push('/protected')
  }, [isLogged, history])

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <LayoutAuthPage>
      <div className='card'>
        <h2>Iniciar Sesion</h2>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='input-field'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Escribe tu email'
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
          </div>

          <div className='row'>
            <div className='input-field'>
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                id='password'
                placeholder='Escribe tu contraseña'
                value={password}
                onChange={handleChangePassword}
              />
            </div>
          </div>
          <div className='row'>
            <Link to='/register'>
              <p className='link'>¿No tienes una cuenta? Registrarse</p>
            </Link>
          </div>
          <div className='row'>
            <button>Iniciar sesion</button>
          </div>
        </form>
      </div>
    </LayoutAuthPage>
  )
}

export default Login
