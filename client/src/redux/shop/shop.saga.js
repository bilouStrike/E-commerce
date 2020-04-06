import { takeLatest, call, put }  from 'redux-saga/effects';
import shopActionsTypes from './shop.types';

import { firestore, converCollectionsSnapshotToMap } from '../../utility/firebase/firebase.utils';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './../shop/shop.actions';

function* fetchCollectionAsync() {
    try {
        const collectionRef = yield firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(converCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export default function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionsTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    )
}