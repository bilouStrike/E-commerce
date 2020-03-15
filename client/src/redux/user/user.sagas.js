import { takeLatest, put, call, all } from 'redux-saga/effects';
import userActionsTypes from './user.types';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../utility/firebase/firebase.utils';
import { SignInSuccess,
         SignInFailure,
         signOutSuccess,
         signOutFailure,
         signUpSuccess,
         signUpFailure
} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
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

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);      
    } catch (error) {
        yield put(SignInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userActionsTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* isUserSignOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(userActionsTypes.SIGN_OUT_START, isUserSignOut)
}

export function* isSignUpStart({payload:{displayName, email, password}}) { // payload.payload ---> my object
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(userActionsTypes.SIGN_UP_START, isSignUpStart);
}

export function* onSignUpSuccess() {
    yield takeLatest(userActionsTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}