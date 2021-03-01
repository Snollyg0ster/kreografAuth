import {call, takeEvery, put} from 'redux-saga/effects';
import {actions as authActions, loginSuccess, signupSuccess} from './actions';
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

    if (data === 'auth/invalid-email') {
      throw 'Некорректный адрес эл.почты!';
    }

    console.log('>Success login');

    yield put(loginSuccess({user: data}));

    callback();
  } catch (err) {
    errorCallback(err);
    console.log('err', err);
  }
}

function* signup({mail, pass, callback, errorCallback}) {
  try {
    const data = yield call(Auth.signup, mail, pass);

    if (data === 'auth/email-already-in-use') {
      throw 'Эта электронная почта уже используется!';
    }

    if (data === 'auth/invalid-email') {
      throw 'Неправильный адрес электронной почты!';
    }

    if (data === 'auth/weak-password') {
      throw 'Слабый пароль!';
    }

    console.log('>Success signup');

    yield put(signupSuccess({user: data}));

    callback();
  } catch (err) {
    errorCallback(err);
    console.log('err', err);
  }
}

const authSagas = [
  takeEvery(authActions.LOGIN_REQUEST, login),
  takeEvery(authActions.SIGNUP_REQUEST, signup),
];

export default authSagas;
