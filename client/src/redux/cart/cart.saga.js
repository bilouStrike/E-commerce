import { call, all, put, takeLatest } from 'redux-saga/effects';
import userActionsTypes from './../user/user.types';
import { clearCart } from './cart.actions';

export function* cleanCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(userActionsTypes.SIGN_OUT_SUCCESS, cleanCartOnSignOut)
}

export function* cartSaga() {
    yield all([
        call(onSignOutSuccess)
    ]);
}