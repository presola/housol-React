import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ForgotPassword from './views/forgot-password'
import Home from './views/home'
import ResetPassword from './views/reset-password'
import Insights from './views/insights'
import Page from './views/page'
import SignIn from './views/sign-in'
import SignUp from './views/sign-up'
import AppHome from './views/app-home'
import Recommendation1 from './views/recommendation1'
import ChooseSecurityAnswers from './views/choose-security-answers'
import EnterSecurityAnswers from './views/enter-security-answers'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ForgotPassword} exact path="/forgot-password" />
        <Route component={Home} exact path="/" />
        <Route component={ResetPassword} exact path="/reset-password" />
        <Route component={Insights} exact path="/insights" />
        <Route component={Page} path="**" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={AppHome} exact path="/app-home" />
        <Route component={Recommendation1} exact path="/recommendation1" />
        <Route
          component={ChooseSecurityAnswers}
          exact
          path="/choose-security-answers"
        />
        <Route
          component={EnterSecurityAnswers}
          exact
          path="/enter-security-answers"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
