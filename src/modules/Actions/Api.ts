import { ActionCreator, Dispatch, Action } from 'redux'
import {
  RootActions,
  FailureFetchPayload,
  RecieveFetchPayload,
  RootState
} from '../Types'
import { ThunkAction } from 'redux-thunk'

/**
 * APIリクエスト開始
 */
export const startFetch: ActionCreator<RootActions> = (): RootActions =>
  ({ type: 'START_FETCH' } as RootActions)

/**
 * APIリクエスト失敗時
 * @param payload
 */
export const failureFetch: ActionCreator<RootActions> = (
  payload: FailureFetchPayload
): RootActions => ({ payload, type: 'FAILURE_FETCH' } as RootActions)

/**
 * APIリクエスト成功時(記事一覧取得API)
 * @param payload
 */
export const recieveFetch: ActionCreator<RootActions> = (
  payload: RecieveFetchPayload
): RootActions => ({ payload, type: 'RECIEVE_FETCH' } as RootActions)

/**
 * APIリクエスト成功時(記事取得API)
 * @param payload
 */
export const recieveFetchEntry: ActionCreator<RootActions> = (
  payload: RecieveFetchPayload
): RootActions => ({ payload, type: 'RECIEVE_FETCH_ENTRY' } as RootActions)

/**
 * 記事一覧取得API
 */
export const getAllEntries = (): ThunkAction<
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

/**
 * 記事取得API
 */
export const getEntry = (
  entryId: number
): ThunkAction<void, RootState, undefined, RootActions> => async (
  dispatch: Dispatch<Action>
) => {
  dispatch(startFetch())
  try {
    const response = await fetch(`http://localhost:3000/entries/${entryId}`)
    const body = await response.json()
    dispatch(recieveFetchEntry(body))
  } catch (e) {
    dispatch(failureFetch({ message: e.message }))
  }
}
