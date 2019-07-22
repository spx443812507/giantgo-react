import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@loadable/component'
import './App.scss'

const Passports = loadable(() => import('../Passports'))

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/passports" component={Passports}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    )
  }
}

export default App
