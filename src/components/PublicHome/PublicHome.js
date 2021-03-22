import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import LayoutAuthPage from '../LayoutAuthPage'
import '../Register/styles.css'
import useUser from '../../hooks/useUser'

const PublicHome = () => {
  let history = useHistory()

  return (
    <LayoutAuthPage>
      <div className='card'>
        <h2 className='pur' style={{ textAlign: 'center' }}>
          Bienvenido a la pagina de autenticacion
        </h2>
        <div className='row'>
          <Link to='/login'>
            <button style={{ width: '100%' }}>Iniciar sesion</button>
          </Link>
          <Link to='/register'>
            <button style={{ width: '100%' }}>Registrarse</button>
          </Link>
        </div>
      </div>
    </LayoutAuthPage>
  )
}

export default PublicHome
