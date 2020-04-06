import { runSaga } from 'redux-saga';
import { onSignUpStart, isSignUpStart } from '../user.sagas';
import { takeLatest } from 'redux-saga/effects';
import * as firebase from 'firebase'
import userActionsTypes from '../user.types';

const createUserWithEmailAndPassword = jest.fn(() => {
  return Promise.resolve('result of createUserWithEmailAndPassword')
})

jest.spyOn(firebase, 'initializeApp')
  .mockImplementation(() => {
    return {
      auth: () => {
        return {
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          currentUser: {
            sendEmailVerification
          },
          signInWithRedirect
        }
      }
    }
});

jest.spyOn(firebase, 'auth').mockImplementation(() => {
  return {
    onAuthStateChanged,
    currentUser: {
      displayName: 'testDisplayName',
      email: 'test@test.com',
      emailVerified: true
    },
    getRedirectResult,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword
  }
});

beforeEach(() => {
    jest.resetModules();
});
  
export async function recordSaga(saga, initialAction) {
  const dispatched = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    saga,
    initialAction
  ).toPromise();

 //console.log(dispatched);
  return dispatched;
}


describe('testing isSignUpStart saga', () => {

    it ('Should return error if failed (passowrd < 6 or email exist)', async () => {
        const initialAction = {
            payload:{displayName:'bidsflal', email:'bivlal@gmail.com', password: '12345678'}
        };
        const dispatched = await recordSaga(
            isSignUpStart, // saga to test
            initialAction
        );
        expect(dispatched[0].type).toEqual(userActionsTypes.SIGN_UP_FAILURE);
        //expect(firebase.auth).toHaveBeenCalled()

    });

    /*it ('Should success ', async () => {
        const initialAction = {
            payload:{displayName:'oigdfgsflal', email:'oioioioio@gmail.com', password: '12345678'}
        };
        const dispatched = await recordSaga(
            isSignUpStart, // saga to test
            initialAction
        );
        expect(dispatched[0].type).toEqual(userActionsTypes.SIGN_UP_SUCCESS);
        expect(createUserWithEmailAndPassword).toHaveBeenCalled();
    });*/

});

