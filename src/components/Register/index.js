import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LayoutAuthPage from '../LayoutAuthPage'
import './styles.css'

const Register = () => {
  const [email, setEmail] = useState('')
  const [dni, setDni] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepited, setPasswordRepited] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleChangeDni = (e) => {
    setDni(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleChangePasswordRepited = (e) => {
    setPasswordRepited(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, dni, password, passwordRepited)
  }

  return (
    <LayoutAuthPage>
      <div className='card'>
        <h2>Registrarse</h2>
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
              <label htmlFor='dni'>D.N.I</label>
              <input
                type='text'
                id='dni'
                placeholder='Escribe tu D.N.I'
                value={dni}
                onChange={handleChangeDni}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
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
            <div className='col'>
              <div className='input-field'>
                <label htmlFor='passwordRepited'>Repite contraseña</label>
                <input
                  type='password'
                  id='passwordRepited'
                  placeholder='Repite la contraseña'
                  value={passwordRepited}
                  onChange={handleChangePasswordRepited}
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <Link to='/login'>
              <p className='link'>¿Ya tienes una cuenta? Iniciar Sesion</p>
            </Link>
          </div>
          <div className='row'>
            <button>Registrarse</button>
          </div>
        </form>
      </div>
    </LayoutAuthPage>
  )
}

export default Register
