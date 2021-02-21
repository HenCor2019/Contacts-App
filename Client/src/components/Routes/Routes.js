import React from 'react'
import SignIn from '../../containers/SignIn/SignIn'
import SignUp from '../../containers/SignUp/SignUp'
import Home from '../../containers/Home/Home'
import HandlerSignUp from '../HandlerSignUp/HandlerSignUp'
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import RequestPassword from '../../containers/RequestPassword/RequestPassword'
import RequestPasswordHandler from '../RequestPasswordHandler/RequestPasswordHandler'

export default function Routes(){
  return(
    <Router>
      <Switch>
        <Route path='/request-password' component={RequestPassword} />
        <Route path='/signIn' component={SignIn} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/Auth/recovery-password/:token' component={RequestPasswordHandler} />
        <Route path='/Auth/:token' component={HandlerSignUp} />
        <Route path='/recovery-password' component={RequestPasswordHandler} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}
