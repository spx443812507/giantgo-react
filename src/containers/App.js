import 'babel-polyfill'
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

import configureStore from '../store/configureStore'

import Passports from './Passports'
import Seminars from './Seminars'

const initialState = {}
const store = configureStore(initialState)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
          <Router>
            <Switch>
              <Route path="/seminars" exact component={Seminars}/>
              <Route path="/passports" component={Passports}/>
              <Redirect to="/"/>
            </Switch>
          </Router>
        </LocaleProvider>
      </Provider>
    )
  }
}

export default App
