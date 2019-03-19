import React from 'react'
import { reduxForm } from 'redux-form'
import Autocomplete from 'react-google-autocomplete'

const mainForm = props => {
  const { 
    handleSubmit, 
    handleOriginChange,
    handleDestinationChange 
  } = props

  return (
    <form className='col s8 offset-s2' onSubmit={handleSubmit}>
      <div className='row'>
        <div className='input-field col s6'>
          <Autocomplete 
            placeholder='From'
            onPlaceSelected={handleOriginChange}
            types={['(regions)']} 
          />
        </div>
        <div className='input-field col s6'>
          <Autocomplete 
            placeholder='To'
            onPlaceSelected={handleDestinationChange}
            types={['(regions)']} 
          />
        </div>
      </div>
      
      
      <div className='center'>
        <button className='btn blue' type='submit'>Search</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'main'
})(mainForm)