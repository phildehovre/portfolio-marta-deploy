import { FETCH_VIDEOS, FETCH_VIDEO } from '../actions/types'

export const videoReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
     return [...state, action.payload];
    case FETCH_VIDEO:
      return [...state, action.payload];
    default:
      return state;
    
  }
}