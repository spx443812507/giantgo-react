import React from 'react'
import Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'
import Loading from '../../components/Loading'

const List = Loadable({
  loader: () => import('./List'),
  loading: Loading
})

export default class Passports extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/seminars" component={List}/>
      </Switch>
    )
  }
}
