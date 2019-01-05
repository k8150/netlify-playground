import { ApiState, ApiActions } from '../Types'
import { number } from 'prop-types'

export const apiReducer = (
  state: ApiState = {
    onFetch: false,
    data: [
      {
        id: 0,
        title: '',
        title_image_url: '',
        content: '',
        created_at: new Date(),
        updated_at: new Date()
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
        data: action.payload,
        error: null
      })
    default:
      return state
  }
}
