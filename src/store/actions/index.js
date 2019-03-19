import * as types from './types'

export const submitLogin = (username, password) => dispatch => {
  //Mock login
  let isAuthorized = (username === 'admin' && password === 'admin')
    ? true
    : false

  dispatch({ type: types.LOGIN, payload: isAuthorized })
}

export const setOrigin = place => dispatch => {
  console.log(place)
  dispatch({ type: types.SET_ORIGIN, payload: place })
}

export const setDestination = place => dispatch => {
  console.log(place)
  dispatch({ type: types.SET_DESTINATION, payload: place })
}