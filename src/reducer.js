import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }

    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }

    case REMOVE_STORY:
      const newArray = state.hits.filter(
        (hit) => hit.objectID !== action.payload
      )
      return { ...state, hits: newArray }

    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 }

    case HANDLE_PAGE:
      return { ...state, page: action.payload }

    default:
      throw new Error(`no matching '${action.type}' action type`)
  }
}
export default reducer
