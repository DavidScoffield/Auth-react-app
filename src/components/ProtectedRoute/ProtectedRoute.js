import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useUser from '../../hooks/useUser'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useUser()

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }}
    />
  )
}
