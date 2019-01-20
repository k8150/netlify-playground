import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { RootState, RootActions, rootReducer } from './modules'
import Main from './component/pages/Main'
import Entry from './component/pages/Entry'
import About from './component/pages/About'

const store = createStore<RootState, RootActions, {}, {}>(
  rootReducer,
  applyMiddleware(ReduxThunk as ThunkMiddleware<RootState, RootActions>)
)

const component: React.SFC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/entry/:entryId" component={Entry} />
          <Route path="/about" component={About} />
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default component
