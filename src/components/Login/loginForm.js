import React from 'react'
import { Field, reduxForm } from 'redux-form'

const loginForm = props => {
  const { handleSubmit } = props
  return (
    <form className='col s6 offset-s3' onSubmit={handleSubmit}>
      <div className='input-field'>
        <Field component='input' id='username' name='username' type='text' required />
        <label htmlFor='username'>Username</label>
      </div>
      <div className='input-field'>
        <Field component='input' id='password' name='password' type='password' required />
        <label htmlFor='password'>Password</label>
      </div>
      <div className='center'>
        <button className='btn blue' type='submit'>Log in</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(loginForm)