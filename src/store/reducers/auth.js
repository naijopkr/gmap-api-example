import * as types from '../actions/types'

const INITIAL_STATE = {
  isAuth: false
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.LOGIN:
      return {
        ...state,
        isAuth: action.payload
      }
    default:
      return state
  }
}

export default authReducer