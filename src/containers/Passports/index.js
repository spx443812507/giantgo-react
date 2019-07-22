import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SignIn from './SignIn'
import SignUp from './SignUp'

export default class Passports extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/passports/signup" exact component={SignUp}/>
        <Route path="/passports/signin" exact component={SignIn}/>
      </Switch>
    )
  }
}
