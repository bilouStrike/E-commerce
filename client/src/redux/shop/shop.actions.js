import shopActionsTypes from  './shop.types';

export const fetchCollectionsStart = () => ({
    type: shopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: shopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
  type: fetchCollectionsFailure,
  payload:errorMessage
})

