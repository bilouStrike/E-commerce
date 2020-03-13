import userActionsTypes from './user.types';

export const setCurrentUser = user => ({
    type: userActionsTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: userActionsTypes.GOOGLE_SIGN_IN_START
});

export const SignInSuccess = user => ({
    type: userActionsTypes.SIGN_IN_SUCCESS,
    payload:user
});

export const SignInFailure = error => ({
    type: userActionsTypes.SIGN_IN_FAILURE,
    payload:error
});

export const emailSignInStart = emailAndPassword => ({
    type: userActionsTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signOutStart = () => ({
    type: userActionsTypes.SIGN_OUT_START
});