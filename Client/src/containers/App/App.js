import React from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import HandlerSignUp from '../../components/HandlerSignUp/HandlerSignUp'
import VerifiedSignUp from '../../components/HandlerSignUp/VerifiedSignUp'
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

export default function App() {

  return(
    <Router>
      <Switch>
        <Route path='/signIn' component={SignIn} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/Auth/:token' component={HandlerSignUp} />
        <Route path='/' component={VerifiedSignUp} />
      </Switch>
    </Router>
     // <SignIn />
  )
}
