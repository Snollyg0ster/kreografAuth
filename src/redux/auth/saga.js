import {call, takeEvery, put} from 'redux-saga/effects';
import {actions as authActions, loginSuccess} from './actions';
import Auth from './../../api/auth';

function* login({mail, pass, callback}) {
  try {
    const data = yield call(Auth.login, mail, pass);

    //const data = null;

    console.log('>Success login');

    yield put(loginSuccess({user: data}));

    callback();
  } catch (err) {
    console.log('err', err);
  }
}

const authSagas = [takeEvery(authActions.LOGIN_REQUEST, login)];

export default authSagas;
