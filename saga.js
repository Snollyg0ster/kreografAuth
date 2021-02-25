import {all} from 'redux-saga/effects';

import authSagas from './src/redux/auth/saga';

function* rootSaga() {
  yield all([...authSagas]);
}

export default rootSaga;
