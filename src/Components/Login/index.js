import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div>
      <h2>Iniciar Sesion</h2>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='Escribe tu email'
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <div className='row'>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            id='password'
            placeholder='Escribe tu contraseña'
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className='row'>
          <button>Iniciar Sesion</button>
        </div>
      </form>
    </div>
  )
}

export default Login
