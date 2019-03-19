import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoute from '../Util/PrivateRoute'
import Login from '../Login'
import Main from '../Main'

class App extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Main} auth={this.props.auth.isAuth} />
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App)