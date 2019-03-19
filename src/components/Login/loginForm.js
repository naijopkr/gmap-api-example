import React from 'react'
import { Field, reduxForm } from 'redux-form'

const loginForm = props => {
  const { handleSubmit } = props
  return (
    <form className='col s6 offset-s3' onSubmit={handleSubmit}>
      <div className='input-field'>
        <Field component='input' name='username' required />
      </div>
      <div className='input-field'>
        <Field component='input' name='password' type='password' required />
      </div>
      <div className='center'>
        <button className='btn blue' type='submit'>Log in</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: 'login' })(loginForm)