import * as types from './types'
import M from 'materialize-css'

import axios from 'axios'

export const submitLogin = (username, password) => dispatch => {
  //Mock login
  let isAuthorized = (username === 'admin' && password === 'admin')
    ? true
    : false

  dispatch({ type: types.LOGIN, payload: isAuthorized })
}

export const setOrigin = place => dispatch => {
  dispatch({ type: types.SET_ORIGIN, payload: place })
}

export const setDestination = place => dispatch => {
  dispatch({ type: types.SET_DESTINATION, payload: place })
}

export const getDistanceMatrix = (origin, destination) => async dispatch => {
  if (!origin || !destination) {
    return false
  }
  
  const mapsURI = '/maps/api/distancematrix/json?origins='
      + origin
      + '&destinations=' + destination
      + '&key=' + PROCESS.ENV.GOOGLE_API_KEY
  
  const res = await axios.get(mapsURI)
  
  if (res.data.status === 'OK') {
    dispatch({ type: types.SET_DISTANCE, payload: res.data })
  } else {
    M.toast({ html: 'Something went wrong!' })
  }
}