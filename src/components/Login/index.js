import React, { Component } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css'

import { submitLogin } from '../../store/actions'

import LoginForm from './loginForm'

class Login extends Component {
  handleSubmit = async evt => {
    evt.preventDefault()
    const { username, password } = this.props.form.login.values
    await this.props.submitLogin(username, password)
    if (this.props.auth.isAuth) {
      this.props.history.push('/')
    } else {
      M.toast({
        html: 'Invalid username or password'
      })
    }
  }

  render = () => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='center'>
            <h3>Login</h3>
          </div>
          <LoginForm handleSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    form: state.form
  }
}

export default connect(mapStateToProps, { submitLogin })(Login)