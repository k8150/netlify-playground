import { combineReducers } from 'redux'
import { RootState, RootActions } from '../Types'
import { getAllEntriesReducer, getEntryReducer } from './Api'

export const rootReducer = combineReducers<RootState, RootActions>({
  getAllEntries: getAllEntriesReducer,
  getEntry: getEntryReducer
})
