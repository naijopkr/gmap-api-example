import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './store/reducers'
import App from './components/App'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app, 
  document.querySelector('#root')
)