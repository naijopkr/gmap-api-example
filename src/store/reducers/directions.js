import * as types from '../actions/types'

const INITIAL_STATE = {
  origin: null,
  destination: null
}

const directionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_ORIGIN:
      return {
        ...state,
        origin: action.payload
      }
    case types.SET_DESTINATION:
      return {
        ...state,
        destination: action.payload
      }
    default:
      return state
  }
}

export default directionsReducer