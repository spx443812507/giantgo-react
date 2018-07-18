import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'
import Loading from '../../components/Loading'

const SignIn = Loadable({
  loader: () => import('./SignIn'),
  loading: Loading
})

const SignUp = Loadable({
  loader: () => import('./SignUp'),
  loading: Loading
})

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
