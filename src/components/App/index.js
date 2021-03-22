import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from '../Register'
import Login from '../Login'
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute'
import { AuthProvider } from '../../contexts/AuthContext'
import ProtectedComponent from '../ProtectedComponent/ProtectedComponent'
import PublicHome from '../PublicHome/PublicHome'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={PublicHome} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <ProtectedRoute path='/protected' component={ProtectedComponent} />
          <Route path='*' component={() => '404 NOT FOUND'} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App
