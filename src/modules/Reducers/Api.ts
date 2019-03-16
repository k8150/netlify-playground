import { GetAllEntriesState, GetEntryState, ApiActions } from '../Types'

/**
 * 記事一覧取得Reducer
 *
 * @param state
 * @param action
 */
export const getAllEntriesReducer = (
  state: GetAllEntriesState = {
    onFetch: false,
    entries: [
      {
        id: undefined,
        title: '',
        title_image_url: '',
        content: '',
        created_at: {
          _seconds: 0,
          _nanoseconds: 0
        },
        updated_at: {
          _seconds: 0,
          _nanoseconds: 0
        }
      }
    ],
    error: 'Please fetch.',
    onLoad: () => {}
  },
  action: ApiActions
) => {
  switch (action.type) {
    case 'START_FETCH':
      return Object.assign({}, state, { onFetch: true })
    case 'FAILURE_FETCH':
      return Object.assign({}, state, {
        onFetch: false,
        error: action.payload.message
      })
    case 'RECIEVE_FETCH':
      return Object.assign({}, state, {
        onFetch: false,
        entries: action.payload,
        error: null
      })
    default:
      return state
  }
}

/**
 * 記事取得Reducer
 *
 * @param state
 * @param action
 */
export const getEntryReducer = (
  state: GetEntryState = {
    onFetch: false,
    entry: {
      id: undefined,
      title: '',
      title_image_url: '',
      content: '',
      created_at: {
        _seconds: 0,
        _nanoseconds: 0
      },
      updated_at: {
        _seconds: 0,
        _nanoseconds: 0
      }
    },
    error: '',
    onLoad: (entryId: string) => {}
  },
  action: ApiActions
) => {
  switch (action.type) {
    case 'START_FETCH':
      return Object.assign({}, state, { onFetch: true })
    case 'FAILURE_FETCH':
      return Object.assign({}, state, {
        onFetch: false,
        error: action.payload.message
      })
    case 'RECIEVE_FETCH_ENTRY':
      return Object.assign({}, state, {
        onFetch: false,
        entry: action.payload,
        error: null
      })
    default:
      return state
  }
}
