import { ActionCreator, Dispatch, Action } from 'redux'
import {
  RootActions,
  FailureFetchPayload,
  RecieveFetchPayload,
  RootState
} from '../Types'
import { ThunkAction } from 'redux-thunk'

export const startFetch: ActionCreator<RootActions> = (): RootActions =>
  ({ type: 'START_FETCH' } as RootActions)

export const failureFetch: ActionCreator<RootActions> = (
  payload: FailureFetchPayload
): RootActions => ({ payload, type: 'FAILURE_FETCH' } as RootActions)

export const recieveFetch: ActionCreator<RootActions> = (
  payload: RecieveFetchPayload
): RootActions => ({ payload, type: 'RECIEVE_FETCH' } as RootActions)

export const getData = (): ThunkAction<
  void,
  RootState,
  undefined,
  RootActions
> => async (dispatch: Dispatch<Action>) => {
  dispatch(startFetch())
  try {
    const response = await fetch('http://localhost:3000/entries')
    const body = await response.json()
    dispatch(recieveFetch(body))
  } catch (e) {
    dispatch(failureFetch({ mesasge: e.message }))
  }
}
