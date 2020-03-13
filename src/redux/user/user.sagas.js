import { takeLatest, put, call, all } from 'redux-saga/effects';
import userActionsTypes from './user.types';
import { auth, googleProvider, createUserProfileDocument } from '../../utility/firebase/firebase.utils';
import { SignInSuccess, SignInFailure } from './user.actions';

export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(SignInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(SignInFailure(error));
    }
}

export function* signInWithEmail({payload}) {

    const { email, password } = payload;
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(userActionsTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ]);
}