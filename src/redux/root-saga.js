import { call, all } from 'redux-saga/effects';

import   fetchCollectionsStart   from './shop/shop.saga';
import  { userSaga } from './user/user.sagas';
import  { cartSaga } from './cart/cart.saga';

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSaga),
        call(cartSaga)
    ]);
}