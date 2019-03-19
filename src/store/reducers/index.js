import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth from './auth'
import directions from './directions'

const reducers = combineReducers({
  auth,
  directions,
  form: formReducer
})

export default reducers