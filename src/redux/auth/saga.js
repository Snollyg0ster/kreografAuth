import {call, takeEvery, put} from 'redux-saga/effects';
import {actions as authActions, loginSuccess} from './actions';
import Auth from './../../api/auth';

function* login({mail, pass, callback, errorCallback}) {
  try {
    const data = yield call(Auth.login, mail, pass);

    if (data === 'auth/user-not-found') {
      throw 'Такого пользователя не существует';
    }

    if (data === 'auth/wrong-password') {
      throw 'Неправильный пароль!';
    }

    console.log('>Success login');

    yield put(loginSuccess({user: data}));

    callback();
  } catch (err) {
    errorCallback(err);
    console.log('err', err);
  }
}

const authSagas = [takeEvery(authActions.LOGIN_REQUEST, login)];

export default authSagas;
