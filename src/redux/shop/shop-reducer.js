import shopActionsTypes from './shop.types';

const INITIAL_STATE = {};

const shopReducer = (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case shopActionsTypes.UPDATE_COLLECTION:
      return {
          ...state,
          collections:action.payload
      }
    default:
      return state
  }
}

export default shopReducer;