import { GetAllEntriesState, GetEntryState, ApiActions } from './Api'

export {
  FailureFetchPayload,
  RecieveFetchPayload,
  ApiActions,
  GetAllEntriesState,
  GetEntryState
} from './Api'

export type RootState = {
  getAllEntries: GetAllEntriesState
  getEntry: GetEntryState
}

export type RootActions = ApiActions
