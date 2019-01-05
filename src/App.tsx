import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk'
import { Provider } from 'react-redux'
import { RootState, RootActions, rootReducer } from './modules'
import Main from './component/pages/Main'

const store = createStore<RootState, RootActions, {}, {}>(
  rootReducer,
  applyMiddleware(ReduxThunk as ThunkMiddleware<RootState, RootActions>)
)

const component: React.SFC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default component
