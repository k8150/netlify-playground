import { Action } from 'redux'

export interface StartFetchAction extends Action {
  type: 'START_FETCH'
}

export type FailureFetchPayload = {
  message: string
}

export interface FailureFetchAction extends Action {
  type: 'FAILURE_FETCH'
  payload: FailureFetchPayload
}

export type RecieveFetchPayload = {
  [key: string]: string
}

export interface RecieveFetchAction extends Action {
  type: 'RECIEVE_FETCH'
  payload: RecieveFetchPayload
}

export type RecieveFetchEntryPayload = {
  [key: string]: string
}

export interface RecieveFetchEntryAction extends Action {
  type: 'RECIEVE_FETCH_ENTRY'
  payload: RecieveFetchEntryPayload
}

export type ApiActions = StartFetchAction &
  FailureFetchAction &
  RecieveFetchAction &
  RecieveFetchEntryAction

export type GetAllEntriesState = {
  onFetch: boolean
  error?: string
  entries: [
    {
      id?: number
      title: string
      title_image_url: string
      content: string
      created_at: Date
      updated_at: Date
    }
  ]
  onLoad: () => void
}

export type GetEntryState = {
  onFetch: boolean
  error?: string
  entry: {
    id?: number
    title: string
    title_image_url: string
    content: string
    created_at: Date
    updated_at: Date
  }
  onLoad: (entryId: number) => void
}
