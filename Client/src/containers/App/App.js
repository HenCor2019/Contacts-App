import React from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import HandlerSignUp from '../../components/HandlerSignUp/HandlerSignUp'
import Home from '../../components/Home/Home/Home'
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

export default function App() {

  return(
    <Router>
      <Switch>
        <Route path='/signIn' component={SignIn} />
        <Route path='/signUp' component={SignUp} />
        <Route path='/Auth/:token' component={HandlerSignUp} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
     // <SignIn />
  )
}
