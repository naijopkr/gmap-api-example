import * as types from './types'

export const submitLogin = (username, password) => dispatch => {
  //Fake login
  let isAuthorized = (username === 'admin' && password === 'admin')
    ? true
    : false

  dispatch({ type: types.LOGIN, payload: isAuthorized })
}