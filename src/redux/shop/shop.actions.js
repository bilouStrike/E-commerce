import shopActionsTypes from  './shop.types';
import { firestore, converCollectionsSnapshotToMap } from './../../utility/firebase/firebase.utils';

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

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart);
      collectionRef.get().then( snapshot => {
          const collectionMap = converCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionMap));
        }
      ).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  }
}